import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Notifications, Permissions } from 'expo';

export default class UserSignupScreen extends React.Component {
	static navigationOptions = {
		title: 'UserSignup'
	};

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			username: '',
			password: '',
			phone: '',
			token: '' //notification token.
		};
	}

	//registering for push notification
	registerForPushNotificationsAsync = async () => {
		const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
		let finalStatus = existingStatus;

		// only ask if permissions have not already been determined, because
		// iOS won't necessarily prompt the user a second time.
		if (existingStatus !== 'granted') {
			// Android remote notification permissions are granted during the app
			// install, so this will only ask on iOS
			const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
			finalStatus = status;
		}

		// Stop here if the user did not grant permissions
		if (finalStatus !== 'granted') {
			return;
		}

		// Get the token that uniquely identifies this device
		let token = await Notifications.getExpoPushTokenAsync();
		this.setState({ token: token });
	};

	//calling registerforpushnotification function before updating the screen.
	async componentDidMount() {
		await this.registerForPushNotificationsAsync();
	}

	//registration functionality using axios
	_register = () => {
		var self = this;
		axios
			.post('http://handyhand.herokuapp.com/cust_registration.php/', {
				username: self.state.username,
				password: self.state.password,
				name: self.state.name,
				phone: self.state.phone,
				email: self.state.email,
				token: self.state.token
			})
			.then(function(response) {
				if (response.data.res == 'success') {
					alert('Registration Successful');
					self.props.navigation.navigate('CLogin');
				} else {
					alert(response.data.res);
				}

				//				DataStore.updateUser(self.state.user);
			})
			.catch(function(error) {
				alert(error);
			});
	};

	//regex for email validation.
	validateEmail = (email) => {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	};

	//regex for indian phone number validation.
	validatePhone = (phone) => {
		var rp = /^[789]\d{9}$/;
		return rp.test(phone);
	};

	//function to check all validation and if fields are empty.
	_onCheck = async () => {
		if (this.state.name == '') {
			alert('Please fill name');
		} else if (this.state.username == '') {
			alert('Please fill username');
		} else if (this.state.password == '') {
			alert('Please fill password');
		} else if (this.state.email == '') {
			alert('Please fill email');
		} else if (this.state.phone == '') {
			alert('Please fill phone number');
		} else {
			if (!this.validateEmail(this.state.email)) {
				alert('Enter a valid email address');
			} else if (!this.validatePhone(this.state.phone)) {
				alert('Enter a valid Indian phone number');
			} else {
				await this._register();
			}
		}
	};

	render() {
		return (
			<KeyboardAvoidingView behavior="padding" style={styles.container}>
				<View style={styles.container}>
					<View style={styles.Signupcontainer}>
						<Text style={styles.title}>REGISTER</Text>
						<TextInput
							placeholder="name"
							placeholderTextColor="rgba(0,0,0,0.5)"
							returnKeyType="next"
							onSubmitEditing={() => this.emailInput.focus()}
							style={styles.input}
							onChangeText={(name) => this.setState({ name })}
						/>

						<TextInput
							placeholder="email"
							placeholderTextColor="rgba(0,0,0,0.5)"
							returnKeyType="next"
							ref={(input) => (this.emailInput = input)}
							onSubmitEditing={() => this.userInput.focus()}
							keyboardType="email-address"
							autoCapitalize="none"
							autoCorrect={false}
							style={styles.input}
							onChangeText={(email) => this.setState({ email })}
						/>
						<TextInput
							placeholder="username"
							placeholderTextColor="rgba(0,0,0,0.5)"
							returnKeyType="next"
							ref={(input) => (this.userInput = input)}
							onSubmitEditing={() => this.passwordInput.focus()}
							autoCapitalize="none"
							autoCorrect={false}
							style={styles.input}
							onChangeText={(username) => this.setState({ username })}
						/>

						<TextInput
							placeholder="password"
							placeholderTextColor="rgba(0,0,0,0.5)"
							returnKeyType="next"
							secureTextEntry
							style={styles.input}
							ref={(input) => (this.passwordInput = input)}
							onSubmitEditing={() => this.PhoneInput.focus()}
							onChangeText={(password) => this.setState({ password })}
						/>

						<TextInput
							placeholder="phone number"
							placeholderTextColor="rgba(0,0,0,0.5)"
							returnKeyType="go"
							keyboardType="phone-pad"
							style={styles.input}
							ref={(input) => (this.PhoneInput = input)}
							onChangeText={(phone) => this.setState({ phone })}
						/>

						<TouchableOpacity style={styles.buttonContainer} onPress={() => this._onCheck()}>
							<Text style={styles.buttonText}>SIGNUP</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.buttonContainer}
							onPress={() => this.props.navigation.navigate('CLogin')}
						>
							<Text style={styles.buttonText}>BACK</Text>
						</TouchableOpacity>
					</View>
				</View>
			</KeyboardAvoidingView>
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
	Signupcontainer: {
		paddingHorizontal: 40,
		marginTop: 50
	},
	input: {
		height: 50,
		backgroundColor: 'rgba(255,255,255,0.5)',
		marginBottom: 10,
		color: 'rgba(0,0,0,0.8)',
		paddingHorizontal: 10,
		borderRadius: 2,
		borderColor: '#0092ca',
		borderRadius: 2,
		borderWidth: 2,
		fontWeight: 'bold'
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
	},
	title: {
		color: '#0092ca',
		fontWeight: 'bold',
		textAlign: 'center',
		padding: 10,
		fontSize: 30
	}
});
