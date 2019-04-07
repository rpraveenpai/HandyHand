import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	ImageBackground,
	KeyboardAvoidingView,
	TextInput,
	TouchableOpacity,
	Picker,
	ActivityIndicator
} from 'react-native';
import axios from 'axios';

export default class HandymanSignupScreen extends React.Component {
	static navigationOptions = {
		title: 'HandymanSignup'
	};

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			username: '',
			password: '',
			phone: '',
			service: '',
			experience: '',
			fontLoaded: true
		};
	}

	//axios data handling.
	_register = () => {
		var self = this;
		axios
			.post('http://handyhand.herokuapp.com/handy_registration.php/', {
				username: this.state.username,
				password: this.state.password,
				name: this.state.name,
				phone: this.state.phone,
				email: this.state.email,
				experience: this.state.experience,
				service: this.state.service
			})
			.then(function(response) {
				if (response.data.res == 'success') {
					alert('Registration Successful');
					self.props.navigation.navigate('HLogin');
				} else {
					alert(response.data.res);
				}
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
		} else if (this.state.service == '') {
			alert('Please select type of service');
		} else if (this.state.experience == '') {
			alert('Please select year of experience');
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
				<ImageBackground source={require('../assets/background/bgwhite.png')} style={styles.container}>
					<View style={styles.container}>
						<View style={styles.Signupcontainer}>
							<Text style={styles.title}>REGISTER</Text>

							<TextInput
								placeholder="name"
								placeholderTextColor="rgba(0,0,0,0.5)"
								returnKeyType="next"
								onSubmitEditing={() => this.userInput.focus()}
								autoCorrect={false}
								style={styles.input}
								onChangeText={(name) => this.setState({ name })}
							/>

							<TextInput
								placeholder="username"
								placeholderTextColor="rgba(0,0,0,0.5)"
								returnKeyType="next"
								ref={(input) => (this.userInput = input)}
								onSubmitEditing={() => this.emailInput.focus()}
								autoCapitalize="none"
								autoCorrect={false}
								style={styles.input}
								onChangeText={(username) => this.setState({ username })}
							/>

							<TextInput
								placeholder="email"
								placeholderTextColor="rgba(0,0,0,0.5)"
								returnKeyType="next"
								ref={(input) => (this.emailInput = input)}
								onSubmitEditing={() => this.passwordInput.focus()}
								keyboardType="email-address"
								autoCapitalize="none"
								autoCorrect={false}
								style={styles.input}
								onChangeText={(email) => this.setState({ email })}
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
								returnKeyType="next"
								keyboardType="phone-pad"
								style={styles.input}
								ref={(input) => (this.PhoneInput = input)}
								onChangeText={(phone) => this.setState({ phone })}
							/>
							<Text style={styles.text}>Type of service:</Text>
							<Picker
								selectedValue={this.state.service}
								style={styles.pickerText}
								onValueChange={(itemValue) => this.setState({ service: itemValue })}
							>
								<Picker.Item label="Electrician" value="Electrician" />
								<Picker.Item label="Plumber" value="Plumber" />
								<Picker.Item label="Carpenter" value="Carpenter" />
								<Picker.Item label="Painter" value="Painter" />
								<Picker.Item label="Cleaner" value="Cleaner" />
								<Picker.Item label="Gardener" value="Gardener" />
							</Picker>

							<Picker
								selectedValue={this.state.experience}
								style={styles.pickerText}
								onValueChange={(itemValue) => this.setState({ experience: itemValue })}
							>
								<Picker.Item label="0-5" value="1" />
								<Picker.Item label="0-10" value="2" />
								<Picker.Item label="More than 10" value="3" />
							</Picker>

							<TouchableOpacity style={styles.buttonContainer} onPress={() => this._onCheck()}>
								<Text style={styles.buttonText}>SIGNUP</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.buttonContainer}
								onPress={() => this.props.navigation.navigate('HLogin')}
							>
								<Text style={styles.buttonText}>BACK</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ImageBackground>
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		height: '100%'
	},
	Signupcontainer: {
		paddingHorizontal: 40,
		marginTop: 30
	},
	input: {
		height: 50,
		backgroundColor: 'rgba(255,255,255,0.5)',
		marginBottom: 10,
		color: 'rgba(0,0,0,0.8)',
		paddingHorizontal: 10,
		borderRadius: 2,
		borderColor: '#f5a623',
		borderRadius: 2,
		borderWidth: 2,
		fontWeight: 'bold'
	},
	logo: {
		width: '100%',
		height: '50%',
		resizeMode: 'contain'
	},
	text: {
		color: '#000000',
		fontWeight: 'bold'
	},
	buttonContainer: {
		backgroundColor: '#f5a623',
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
		color: '#FFFFFF',
		fontWeight: '700'
	},
	pickerText: {
		height: 50,
		width: '100%',
		color: '#000000'
	},
	title: {
		color: '#f5a623',
		fontWeight: 'bold',
		textAlign: 'center',
		padding: 10,
		fontSize: 30
	}
});
