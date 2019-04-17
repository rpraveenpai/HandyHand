import React, { Component } from 'react';
import { ImageBackground, Alert, StyleSheet, FlatList, Text, View, ToastAndroid, TouchableOpacity } from 'react-native';
import DataStore from '../Store/datastore';
import { observer } from 'mobx-react';
import { IntentLauncherAndroid } from 'expo';
import { MapView, Permissions, Location } from 'expo';
import { OpenMapDirections } from 'react-native-navigation-directions';

@observer
export default class AcceptedOrderScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: DataStore.order.acceptedorder,
			orderid: '',
			region: null,
			clatitude: '',
			clongitude: ''
		};
		this._getALocationAsync();
	}

	//fucntion to get current location.
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

	//function to open google maps and show direction to user location.
	_callShowDirections = () => {
		if (this.state.region.longitude == this.state.longitude || this.state.region.latitude == this.state.longitude) {
			alert("You are at customer's location");
		} else {
			const startPoint = {
				longitude: this.state.region.longitude,
				latitude: this.state.region.latitude
			};

			const endPoint = {
				longitude: parseFloat(this.state.longitude),
				latitude: parseFloat(this.state.latitude)
			};

			const transportPlan = 'd';

			OpenMapDirections(startPoint, endPoint, transportPlan).then((res) => {
				console.log(res);
			});
		}
	};

	//function to store specified data from the whole array.
	_StoreLocation = async (item) => {
		this.setState({ longitude: item.Longitude });
		this.setState({ orderid: item.Order_ID });

		let providers = await Location.getProviderStatusAsync();

		if (providers.locationServicesEnabled == true) {
			Alert.alert('Do you want to get direction?', 'Click Yes to proceed.', [
				{
					text: 'Cancel',
					onPress: () => this.props.navigation.navigate('AcceptedOrder'),
					style: 'cancel'
				},
				{
					text: 'Yes',
					onPress: () => {
						this._callShowDirections();
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
		return <View style={{ height: 1, width: '100%', backgroundColor: '#000' }} />;
	};
	render() {
		return (
			<ImageBackground source={require('../assets/background/bgwhite.png')} style={styles.container}>
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
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		height: '100%'
	},
	button: {
		padding: 20
	},
	title: {
		fontSize: 18,
		color: '#000',
		fontWeight: 'bold',
		marginBottom: 5
	},
	subtitle: {
		fontSize: 16,
		color: '#f5a623'
	},
	buttonContainer: {
		backgroundColor: '#f5a623',
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
		color: '#FFFFFF',
		fontWeight: '500'
	}
});
