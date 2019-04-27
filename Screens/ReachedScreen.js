import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import DataStore from '../Store/datastore';
import { observer } from 'mobx-react';
import call from 'react-native-phone-call';

@observer
export default class ReachedScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			phone: DataStore.order_details.phone,
			token: DataStore.order_details.token,
			orderid: DataStore.order_details.orderID
		};
	}

	//function to make call.
	_call = () => {
		//handler to make a call
		const args = {
			number: this.state.phone,
			prompt: false
		};
		call(args).catch(console.error);
	};

	//function to send push notification to specified token.
	_sendPushnotification = () => {
		let response = fetch('https://exp.host/--/api/v2/push/send', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				to: this.state.token,
				sound: 'default',
				title: 'Handyman reached',
				body: 'Your handyman has reached your location'
			})
		});
	};

	_sendInfo = () => {
		this._sendPushnotification();
		this._call();
	};

	//prompting alert to make decision.
	_checkAlert = () => {
		Alert.alert('Do you want to let customer know that you are here?', 'Select an option to proceed.', [
			{
				text: 'Cancel',
				onPress: () => this.props.navigation.navigate('AcceptedOrder'),
				style: 'cancel'
			},
			{
				text: 'Yes',
				onPress: () => {
					this._sendInfo();
				}
			}
		]);
	};

	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity
					style={styles.buttonContainer}
					onPress={() => {
						this._checkAlert();
					}}
				>
					<Text style={styles.buttonText}>Reached</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.buttonContainer}
					onPress={() => {
						this.props.navigation.navigate('HandyHome');
					}}
				>
					<Text style={styles.buttonText}>Back</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#eeeeee'
	},

	buttonContainer: {
		backgroundColor: '#eeeeee',
		paddingVertical: 15,
		width: 100,
		borderRadius: 2,
		marginBottom: 50,
		shadowColor: '#000000',
		elevation: 7,
		shadowRadius: 5,
		shadowOpacity: 1.0
	},
	buttonText: {
		textAlign: 'center',
		color: '#0092ca',
		fontWeight: 'bold',
		fontSize: 20
	}
});
