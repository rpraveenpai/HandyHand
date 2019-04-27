import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ToastAndroid, Alert } from 'react-native';
import DataStore from '../Store/datastore';
import { observer } from 'mobx-react';
import call from 'react-native-phone-call';
import axios from 'axios';

@observer
export default class COrderCompleteScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			phone: DataStore.handyinfo.phone,
			token: DataStore.handyinfo.token,
			orderid: DataStore.handyinfo.orderid
		};
	}

	//function to call.
	_call = () => {
		//handler to make a call
		const args = {
			number: this.state.phone,
			prompt: false
		};
		call(args).catch(console.error);
	};

	//changing status info to completed in order_info table.
	_orderComplete = async () => {
		var self = this;
		axios
			.post('http://handyhand.herokuapp.com/order_complete.php/', {
				orderid: this.state.orderid
			})
			.then(function(response) {
				if (response.data.res == 'success') {
					ToastAndroid.show('Order has been completed.', ToastAndroid.SHORT);
					self.props.navigation.navigate('Home');
				} else {
					alert('Failed');
				}
			})
			.catch(function(error) {
				alert(error);
			});
		await this._sendPushnotification();
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
				title: 'Order Completed',
				body: 'Customer approved completion of the order.'
			})
		});
	};

	//prompting alert for checking order completion.
	_checkAlert = () => {
		Alert.alert('Is your order completed by handyman', 'Click Yes to confirm.', [
			{
				text: 'Cancel',
				onPress: () => this.props.navigation.navigate('COrder'),
				style: 'cancel'
			},
			{
				text: 'Yes',
				onPress: () => {
					this._orderComplete();
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
					<Text style={styles.buttonText}>Complete the order</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.buttonContainer}
					onPress={() => {
						this._call();
					}}
				>
					<Text style={styles.buttonText}>Call handyman</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.buttonContainer}
					onPress={() => {
						this.props.navigation.navigate('COrder');
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
