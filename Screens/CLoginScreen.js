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
	ToastAndroid
} from 'react-native';
import DataStore from '../Store/datastore';
import { observer } from 'mobx-react';
import axios from 'axios';

@observer
export default class CLoginScreen extends React.Component {
	static navigationOptions = {
		title: 'CLogin'
	};
	constructor(props) {
		super(props);
		this.state = {
			customerID: '',
			username: '',
			password: '',
			name: '',
			email: '',
			phone: ''
		};
	}

	_getData = () => {
		var self = this;
		axios
			.post('http://handyhand.herokuapp.com/c_login.php/', {
				username: self.state.username,
				password: self.state.password
			})
			.then(function(response) {
				if (response.data.res == 'success') {
					ToastAndroid.show('Login Successful', ToastAndroid.SHORT);
					DataStore.updateUser(self.state.username);
					DataStore.updateCID(response.data.Customer_ID);
					DataStore.updateCName(response.data.name);
					DataStore.updateCEmail(response.data.email);
					DataStore.updateCPhone(response.data.phone);
					DataStore.updateCPass(response.data.password);
					self.props.navigation.navigate('Home');
				} else {
					alert('Login Failed');
				}
			})
			.catch(function(error) {
				alert(error);
			});
	};

	_onLogin = async () => {
		if (this.state.username == '' || this.state.password == '') alert('Username and password cannot be empty');
		else await this._getData();
	};

	render() {
		return (
			<KeyboardAvoidingView behavior="padding" style={styles.container}>
				<ImageBackground source={require('../assets/background/bgwhite.png')} style={styles.container}>
					<View style={styles.container}>
						<View style={styles.logoContainer}>
							<Image style={styles.logo} source={require('../assets/icons/user.png')} />
							<Text style={styles.title}>Customer</Text>
						</View>

						<View style={styles.Logincontainer}>
							<TextInput
								placeholder="username"
								placeholderTextColor="rgba(0,0,0,0.5)"
								returnKeyType="next"
								onSubmitEditing={() => this.passwordInput.focus()}
								autoCapitalize="none"
								autoCorrect={false}
								style={styles.input}
								onChangeText={(username) => this.setState({ username })}
							/>

							<TextInput
								placeholder="password"
								placeholderTextColor="rgba(0,0,0,0.5)"
								returnKeyType="go"
								secureTextEntry
								style={styles.input}
								ref={(input) => (this.passwordInput = input)}
								onChangeText={(password) => this.setState({ password })}
							/>

							<TouchableOpacity
								style={styles.buttonContainer}
								onPress={() => {
									this._onLogin();
								}}
							>
								<Text style={styles.buttonText}>LOGIN</Text>
							</TouchableOpacity>

							<TouchableOpacity
								style={styles.buttonContainer}
								onPress={() => this.props.navigation.navigate('UserSignup')}
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
	Logincontainer: {
		padding: 20
	},
	input: {
		height: 50,
		backgroundColor: 'rgba(255,255,255,0.5)',
		marginBottom: 10,
		color: 'rgba(0,0,0,0.8)',
		paddingHorizontal: 10,
		borderColor: '#f5a623',
		borderRadius: 2,
		borderWidth: 2,
		fontWeight: 'bold'
	},
	title: {
		color: '#f5a623',
		fontWeight: 'bold',
		fontSize: 35
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
		fontWeight: '500'
	}
});
