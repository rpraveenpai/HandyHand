import React, { Component } from 'react';
import { Alert, StyleSheet, FlatList, Text, View, ToastAndroid, TouchableOpacity } from 'react-native';
import DataStore from '../Store/datastore';
import { observer } from 'mobx-react';
import { IntentLauncherAndroid } from 'expo';
import { Location, Permissions } from 'expo';
import axios from 'axios';

@observer
export default class HOrderScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: DataStore.order.horder,
			orderid: '',
			handyid: DataStore.handy_details.handyID,
			hname: DataStore.handy_details.name
		};
	}

	componentDidMount() {
		this._getALocationAsync(); //getting current location of handyman
	}

	//function to get current location.
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
		DataStore.updateRegion(region); //storing region in datastore.
	};

	//updating HandyId and handy Name on order_info.
	_acceptOrder = () => {
		var self = this;
		axios
			.post('http://handyhand.herokuapp.com/accept_order.php/', {
				orderid: self.state.orderid,
				handyid: self.state.handyid,
				hname: self.state.hname
			})
			.then(function(response) {
				if (response.data.res == 'success') {
					ToastAndroid.show('Order Has been accepted', ToastAndroid.SHORT);
					self.props.navigation.navigate('HLocation');
				} else if (response.data.res == 'issue') {
					alert('You have already accepted one order. Complete it to book another order');
					self.props.navigation.navigate('HOrder');
				} else {
					alert('Order Failed');
				}
			})
			.catch(function(error) {
				alert(error);
			});
	};

	//function to store specified data from the whole array.
	_StoreLocation = async (item) => {
		DataStore.updateHLatitude(item.Latitude);
		DataStore.updateHLongitude(item.Longitude);
		DataStore.updateHLatitudeDelta(item.LatitudeDelta);
		DataStore.updateLongitudeDelta(item.LongitudeDela);
		DataStore.updateOrderID(item.Order_ID);
		this.setState({ orderid: item.Order_ID });
		DataStore.updateOCName(item.Cname);
		DataStore.updateOPhone(item.PhoneNumber);
		DataStore.updateSerInfo(item.ServiceInfo);
		DataStore.updateDate(item.Order_Date);

		let providers = await Location.getProviderStatusAsync();

		if (providers.locationServicesEnabled == true) {
			Alert.alert('Do you want to accept this order?', 'Click Yes to proceed.', [
				{
					text: 'Cancel',
					onPress: () => this.props.navigation.navigate('HOrder'),
					style: 'cancel'
				},
				{
					text: 'Yes',
					onPress: () => {
						this._acceptOrder();
					}
				}
			]);
		} else {
			IntentLauncherAndroid.startActivityAsync(IntentLauncherAndroid.ACTION_LOCATION_SOURCE_SETTINGS);
		}
	};

	renderItem = ({ item }) => {
		return (
			<View style={{ flex: 1, flexDirection: 'row', marginBottom: 3 }}>
				<View style={{ flex: 1, justifycontent: 'center' }}>
					<Text style={styles.title} onPress={this._StoreLocation.bind(this, item)}>
						Order ID: {item.Order_ID}
					</Text>
					<Text style={styles.subtitle}>Customer Name: {item.Cname}</Text>
					<Text style={styles.subtitle}>Phone Number: {item.PhoneNumber}</Text>
					<Text style={styles.subtitle}>Information: {item.ServiceInfo}</Text>
					<Text style={styles.subtitle}>Date: {item.Order_Date}</Text>
				</View>
			</View>
		);
	};

	//line to seperate list items.
	renderSeperator = () => {
		return <View style={{ height: 1, width: '100%', backgroundColor: '#222831' }} />;
	};
	render() {
		return (
			<View style={styles.container}>
				<FlatList
					data={this.state.data}
					renderItem={this.renderItem}
					keyExtractor={(item, index) => index.toString()}
					ItemSeparatorComponent={this.renderSeperator}
				/>

				<View style={styles.button}>
					<TouchableOpacity
						style={styles.buttonContainer}
						onPress={() => {
							this.props.navigation.navigate('HandyHome');
						}}
					>
						<Text style={styles.buttonText}>Back</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		height: '100%',
		backgroundColor: '#eeeeee'
	},
	button: {
		padding: 20
	},
	title: {
		fontSize: 18,
		color: '#222831',
		fontWeight: 'bold',
		marginBottom: 5
	},
	subtitle: {
		fontSize: 16,
		color: '#0092ca'
	},
	buttonContainer: {
		backgroundColor: '#0092ca',
		paddingVertical: 15,
		paddingHorizontal: 20,
		borderRadius: 2,
		marginBottom: 10,
		shadowColor: '#000000',
		elevation: 7,
		shadowRadius: 5,
		shadowOpacity: 1.0
	},
	buttonText: {
		textAlign: 'center',
		color: '#eeeeee',
		fontWeight: '500'
	}
});
