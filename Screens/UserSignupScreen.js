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
	Alert
} from 'react-native';
import axios from 'axios';

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
			phone: ''
		};
	}

	_register = () => {
		axios
			.post('http://handyhand.herokuapp.com/cust_registration.php/', {
				username: this.state.username,
				password: this.state.password,
				name: this.state.name,
				phone: this.state.phone,
				email: this.state.email
			})
			.then(function(response) {
				alert(response.data.res);

				//				DataStore.updateUser(self.state.user);
				//self.props.navigation.navigate('CLogin');
			})
			.catch(function(error) {
				alert(error);
			});
	};

	render() {
		return (
			<KeyboardAvoidingView behavior="padding" style={styles.container}>
				<ImageBackground source={require('../assets/background/bg2.png')} style={styles.container}>
					<View style={styles.container}>
						<View style={styles.logoContainer}>
							<Image style={styles.logo} source={require('../assets/icons/logo.png')} />
						</View>

						<View style={styles.Signupcontainer}>
							<TextInput
								placeholder="name"
								placeholderTextColor="rgba(255,255,255,0.7)"
								returnKeyType="next"
								onSubmitEditing={() => this.emailInput.focus()}
								style={styles.input}
								onChangeText={(name) => this.setState({ name })}
							/>

							<TextInput
								placeholder="email"
								placeholderTextColor="rgba(255,255,255,0.7)"
								returnKeyType="next"
								ref={(input) => (this.emailInput = input)}
								onSubmitEditing={() => this.userlInput.focus()}
								keyboardType="email-address"
								autoCapitalize="none"
								autoCorrect={false}
								style={styles.input}
								onChangeText={(email) => this.setState({ email })}
							/>
							<TextInput
								placeholder="username"
								placeholderTextColor="rgba(255,255,255,0.7)"
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
								placeholderTextColor="rgba(255,255,255,0.7)"
								returnKeyType="next"
								secureTextEntry
								style={styles.input}
								ref={(input) => (this.passwordInput = input)}
								onSubmitEditing={() => this.PhoneInput.focus()}
								onChangeText={(password) => this.setState({ password })}
							/>

							<TextInput
								placeholder="phone number"
								placeholderTextColor="rgba(255,255,255,0.7)"
								returnKeyType="go"
								style={styles.input}
								ref={(input) => (this.PhoneInput = input)}
								onChangeText={(phone) => this.setState({ phone })}
							/>

							<TouchableOpacity
								style={styles.buttonContainer}
								onPress={async () => await this._register()}
							>
								<Text style={styles.buttonText}>SIGNUP</Text>
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
		padding: 20
	},
	input: {
		height: 40,
		backgroundColor: 'rgba(255,255,255,0.2)',
		marginBottom: 10,
		color: '#FFF',
		paddingHorizontal: 10,
		borderRadius: 5
	},
	logoContainer: {
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center'
	},
	logo: {
		width: '100%',
		height: '50%',
		resizeMode: 'contain'
	},
	title: {
		color: '#FFF',
		marginTop: 10,
		width: 180,
		textAlign: 'center',
		opacity: 0.9
	},
	buttonContainer: {
		backgroundColor: '#f5a623',
		paddingVertical: 15,
		borderRadius: 5,
		marginBottom: 10
	},
	buttonText: {
		textAlign: 'center',
		color: '#FFFFFF',
		fontWeight: '500'
	}
});
