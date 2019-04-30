import React from 'react';
import { StyleSheet, Text, View, Alert, TextInput, TouchableOpacity } from 'react-native';
import { Location } from 'expo';
import DataStore from '../Store/datastore';
import { observer } from 'mobx-react';
import { IntentLauncherAndroid } from 'expo';
import axios from 'axios';

@observer
export default class AddressScreen extends React.Component {
	static navigationOptions = {
		title: 'Address'
	};
	constructor(props) {
		super(props);
		this.state = {
			customerID: DataStore.cust_details.customerID,
			name: DataStore.cust_details.name,
			phone: DataStore.cust_details.phone
		};
	}

	//regex for indian phone number validation.
	validatePhone = (phone) => {
		var rp = /^[789]\d{9}$/;
		return rp.test(phone);
	};

	//function to check if user booked max number of service.
	_next = () => {
		var self = this;
		axios
			.post('http://handyhand.herokuapp.com/cus_ordercheck.php/', {
				customerID: self.state.customerID
			})
			.then(function(response) {
				if (response.data.res == 'success') {
					DataStore.updateOPhone(self.state.phone);
					DataStore.updateOCName(self.state.name);
					self.props.navigation.navigate('Location');
				} else if (response.data.res == 'issue') {
					alert('You cannot book anymore services today.');
					self.props.navigation.navigate('Home');
				} else {
					alert('Fail');
				}
			})
			.catch(function(error) {
				alert(error);
			});
	};

	//function to enable/check if location services are turned on.
	_check = async () => {
		if (!this.validatePhone(this.state.phone)) {
			alert('Enter a valid phone number');
		} else {
			let providers = await Location.getProviderStatusAsync();

			if (providers.locationServicesEnabled == true) {
				this._next();
			} else {
				Alert.alert('Location Services must be on to proceed further', 'Please turn on location', [
					{
						text: 'Cancel',
						onPress: () => this.props.navigation.navigate('Address'),
						style: 'cancel'
					},
					{
						text: 'OK',
						onPress: () =>
							IntentLauncherAndroid.startActivityAsync(
								IntentLauncherAndroid.ACTION_LOCATION_SOURCE_SETTINGS
							)
					}
				]);
			}
		}
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.formContainer}>
					<Text style={styles.textstyle}>Name</Text>
					<TextInput
						placeholder="Name"
						placeholderTextColor="rgba(0,0,0,0.5)"
						returnKeyType="next"
						onSubmitEditing={() => this.PhoneInput.focus()}
						autoCapitalize="none"
						autoCorrect={false}
						style={styles.input}
						value={this.state.name}
						onChangeText={(name) => this.setState({ name })}
					/>
					<Text style={styles.textstyle}>Phone Number</Text>
					<TextInput
						placeholder="Phone Number"
						placeholderTextColor="rgba(0,0,0,0.5)"
						returnKeyType="go"
						keyboardType="phone-pad"
						style={styles.input}
						value={this.state.phone}
						ref={(input) => (this.PhoneInput = input)}
						onChangeText={(phone) => this.setState({ phone })}
					/>

					<TouchableOpacity
						style={styles.buttonContainer}
						onPress={() => {
							this._check();
						}}
					>
						<Text style={styles.buttonText}>Next</Text>
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
	textstyle: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#222831'
	},
	formContainer: {
		justifyContent: 'space-around',
		padding: 20,
		flexDirection: 'column'
	},
	input: {
		height: 40,
		backgroundColor: 'rgba(255,255,255,0.5)',
		marginBottom: 10,
		color: 'rgba(0,0,0,0.8)',
		paddingHorizontal: 10,
		borderColor: '#0092ca',
		borderRadius: 4,
		borderWidth: 2,
		fontWeight: 'bold'
	},
	logo: {
		width: '100%',
		height: '50%',
		resizeMode: 'contain'
	},
	buttonContainer: {
		backgroundColor: '#0092ca',
		paddingVertical: 15,
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
