import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	ImageBackground,
	KeyboardAvoidingView,
	TextInput,
	TouchableOpacity
} from 'react-native';
/*import DataStore from '../Store/datastore';
import { observer } from 'mobx-react';
import axios from 'axios';*/

export default class CLoginScreen extends React.Component {
	static navigationOptions = {
		title: 'CLogin'
	};
	constructor(props) {
		super(props);
		this.state = { user: '', pass: '', verified: false };
	}

	/*	_sendRequest = () => {
		var self = this;
		axios
			.post('https://handyhand.herokuapp.com/UserManagement/login.php', {
				username: this.state.user,
				password: this.state.pass
			})
			.then(function(response) {
				if (response.data.status == 'true') {
					//self._getEvents();
					DataStore.updateUser(self.state.user);
					self.setState({ user: '', pass: '', verified: false });
					self.props.navigation.navigate('HomeScreen');
				} else alert('Invalid Credentials');
			})
			.catch(function(error) {
				alert(error);
			});
	};

	_onLogin = async () => {
		if (this.state.user == '' || this.state.pass == '') alert('Username and password cannot be empty');
		else await this._sendRequest();
	};*/

	render() {
		return (
			<KeyboardAvoidingView behavior="padding" style={styles.container}>
				<ImageBackground source={require('../assets/background/bg2.png')} style={styles.container}>
					<View style={styles.container}>
						<View style={styles.logoContainer}>
							<Image style={styles.logo} source={require('../assets/icons/logo.png')} />
						</View>

						<View style={styles.formContainer}>
							<View style={styles.Logincontainer}>
								<TextInput
									placeholder="user"
									placeholderTextColor="rgba(255,255,255,0.7)"
									returnKeyType="next"
									onSubmitEditing={() => this.passwordInput.focus()}
									autoCapitalize="none"
									autoCorrect={false}
									style={styles.input}
								/>

								<TextInput
									placeholder="password"
									placeholderTextColor="rgba(255,255,255,0.7)"
									returnKeyType="go"
									secureTextEntry
									style={styles.input}
									ref={(input) => (this.passwordInput = input)}
								/>

								<TouchableOpacity
									style={styles.buttonContainer}
									onPress={() => {
										this.props.navigation.navigate('Home');
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
