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
import axios from 'axios';
import DataStore from '../Store/datastore';
import { observer } from 'mobx-react';

@observer
export default class ProfileScreen extends React.Component {
	static navigationOptions = {
		title: 'Profile'
	};

	constructor(props) {
		super(props);
		this.state = {
			name: DataStore.cust_details.name,
			email: DataStore.cust_details.email,
			username: DataStore.session.username,
			password: DataStore.cust_details.password,
			phone: DataStore.cust_details.phone
		};
	}
/*
	//axios data handling.
	_register = () => {
		var self = this;
		axios
			.post('http://handyhand.herokuapp.com/cust_registration.php/', {
				username: this.state.username,
				password: this.state.password,
				name: this.state.name,
				phone: this.state.phone,
				email: this.state.email
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
*/
	render() {
		return (
			<KeyboardAvoidingView behavior="padding" style={styles.container}>
				<ImageBackground source={require('../assets/background/bg2.png')} style={styles.container}>
					<View style={styles.container}>

						<View style={styles.profilecontainer}>

							<Text style={styles.textstyle}>Username</Text>
							<TextInput
								placeholder="username"
								placeholderTextColor="rgba(255,255,255,0.7)"
								returnKeyType="next"							
								autoCapitalize="none"
								autoCorrect={false}
								style={styles.input}
								value={this.state.username}
								editable={false}
							/>
							<Text style={styles.textstyle}>Name</Text>
							<TextInput
								placeholder="name"
								placeholderTextColor="rgba(255,255,255,0.7)"
								returnKeyType="next"								
								style={styles.input}
								value={this.state.name}
							/>
							<Text style={styles.textstyle}>Email</Text>
							<TextInput
								placeholder="email"
								placeholderTextColor="rgba(255,255,255,0.7)"
								returnKeyType="next"							
								keyboardType="email-address"
								autoCapitalize="none"
								autoCorrect={false}
								style={styles.input}
								value={this.state.email}
							/>	
							<Text style={styles.textstyle}>Password</Text>
							<TextInput
								placeholder="password"
								placeholderTextColor="rgba(255,255,255,0.7)"
								returnKeyType="next"
								secureTextEntry
								style={styles.input}	
								value={this.state.password}
							/>

							<Text style={styles.textstyle}>Phone Number</Text>
							<TextInput
								placeholder="phone number"
								placeholderTextColor="rgba(255,255,255,0.7)"
								returnKeyType="go"
								keyboardType="phone-pad"
								style={styles.input}
								value={this.state.phone}
							/>

							<TouchableOpacity style={styles.buttonContainer}>
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
	profilecontainer: {
		padding: 20,
		flexDirection: "column",
		//justifyContent: "space-evenly"
	},
	textstyle: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'white'
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
