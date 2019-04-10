import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MapView, Permissions, Location } from 'expo';
import { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { CurrentLocationButton } from '../components/CurrentLocationButton';
import { BookButton } from '../components/BookButton';
import DataStore from '../Store/datastore';
import { observer } from 'mobx-react';
import axios from 'axios';

@observer
export default class LocationScreen extends React.Component {
	static navigationOptions = {
		title: 'Location'
	};
	constructor(props) {
		super(props);
		this.state = {
			region: null,
			customerID: DataStore.cust_details.customerID,
			name: DataStore.order_details.cname,
			phone: DataStore.order_details.phone,
			service: DataStore.order_details.service,
			serviceInfo: DataStore.order_details.serviceInfo
		};

		this._getALocationAsync();
	}

	_getALocationAsync = async () => {
		let { status } = await Permissions.askAsync(Permissions.LOCATION);
		if (status !== 'granted') {
			console.log('Permission to access location was denied.');
		}

		let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
		let region = {
			longitude: location.coords.longitude,
			latitude: location.coords.latitude,
			latitudeDelta: 0.0922,
			longitudeDelta: 0.0421
		};
		this.setState({ region: region });
		
	};

	centerMap() {
		const { latitude, longitude, latitudeDelta, longitudeDelta } = this.state.region;
		this.map.animateToRegion({
			latitude,
			longitude,
			longitudeDelta,
			latitudeDelta
		});
	}

	_book() {
		var self = this;
		axios
			.post('http://handyhand.herokuapp.com/order_registration.php/', {
				customerID: this.state.customerID,
				region: JSON.stringify(this.state.region),
				name: this.state.name,
				phone: this.state.phone,
				service: this.state.service,
				serviceInfo: this.state.serviceInfo
			})
			.then(function(response) {				
				if (response.data.res == 'success') {
					alert('Order Successful');
					DataStore.updateOCID(this.state.customerID);
					DataStore.updateOCName(this.state.name);
					DataStore.updateOPhone(this.state.phone);
					DataStore.updateOService(this.state.service);
					DataStore.updateSerInfo(this.state.serviceInfo);
					DataStore.updateOrderID(response.data.orderID);
					DataStore.updateDate(response.data.orderdate);
					DataStore.updateRegion(this.state.region);
					self.props.navigation.navigate('Corder');
				} else {
					alert(response.data.res);
				}
			})
			.catch(function(error) {
				alert(error);
			});
		/*alert('Your Order has been Booked');
		DataStore.updateRegion(this.state.region);
		alert(JSON.stringify(DataStore.order_details.region));
		this.props.navigation.navigate('Home');*/
	}

	render() {
		return (
			<View style={styles.container}>
				<BookButton
					cb={() => {
						this._book();
					}}
				/>
				<CurrentLocationButton
					cb={() => {
						this.centerMap();
					}}
				/>
				<MapView
					provider={PROVIDER_GOOGLE}
					style={{ flex: 1 }}
					initialRegion={this.state.region}
					showsUserLocation={true}
					showsCompass={true}
					rotateEnabled={false}
					ref={(map) => {
						this.map = map;
					}}
					style={{ flex: 1 }}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
		//paddingTop: getStatusBarHeight()
	}
});
