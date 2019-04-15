import React from 'react';
import { ImageBackground, Alert, Button, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import DataStore from '../Store/datastore';
import { observer } from 'mobx-react';
import { OpenMapDirections } from 'react-native-navigation-directions';
import { MapView, Permissions, Location } from 'expo';

@observer
export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			latitude: DataStore.HandyLocation.latitude,
			longitude: DataStore.HandyLocation.longitude,
			region: null,
			orderID: DataStore.order_details.orderID,
			name: DataStore.order_details.cname,
			phone: DataStore.order_details.phone,
			serInfo: DataStore.order_details.serviceInfo,
			date: DataStore.order_details.orderdate
		};
		this._getALocationAsync();
		//this._checkLocation();
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

	_callShowDirections = () => {
		if (this.state.region.longitude == this.state.longitude || this.state.region.latitude == this.state.longitude) {
			alert("You are at customer's location");
		} else {
			const startPoint = {
				longitude: this.state.region.longitude,
				latitude: this.state.region.latitude
			};

			const endPoint = {
				longitude: this.state.longitude,
				latitude: this.state.latitude
			};

			const transportPlan = 'd';

			OpenMapDirections(startPoint, endPoint, transportPlan).then((res) => {
				console.log(res);
			});
		}
	};

	_checkLocation = () => {
		if (this.state.region.longitude == this.state.longitude || this.state.region.latitude == this.state.longitude) {
			//push notification
			//axios table status update ('complete')
		}
	};

	render() {
		return (
			<ImageBackground source={require('../assets/background/bgwhite.png')} style={styles.container}>
				<View style={styles.container}>
					<View style={styles.orderContainer}>
						<Text style={styles.title}>ORDER SUCCESS</Text>
						<Text style={styles.orderText}>Order ID: {this.state.orderID}</Text>
						<Text style={styles.orderText}>Name: {this.state.name}</Text>
						<Text style={styles.orderText}>Phone: {this.state.phone}</Text>
						<Text style={styles.orderText}>Service Info: {this.state.serInfo}</Text>
						<Text style={styles.orderText}>Date: {this.state.date}</Text>

						<TouchableOpacity
							style={styles.buttonContainer}
							onPress={() => {
								this._callShowDirections();
							}}
						>
							<Text style={styles.buttonText}>Okay</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		height: '100%',
		justifyContent: 'center'
	},
	title: {
		fontSize: 35,
		fontWeight: 'bold',
		padding: 10,
		color: '#fff'
	},
	orderContainer: {
		flexDirection: 'column',
		alignItems: 'center',
		borderRadius: 10,
		backgroundColor: '#f5a623',
		marginVertical: 20,
		marginHorizontal: 30
	},
	orderText: {
		fontSize: 15,
		fontWeight: 'bold',
		padding: 5,
		color: '#000'
	},
	buttonContainer: {
		backgroundColor: '#fff',
		paddingVertical: 15,
		width: 60,
		borderRadius: 2,
		marginBottom: 10,
		shadowColor: '#000000',
		elevation: 7,
		shadowRadius: 5,
		shadowOpacity: 1.0
	},
	buttonText: {
		textAlign: 'center',
		color: '#f5a623',
		fontWeight: 'bold',
		fontSize: 20
	}
});
