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
			customerID: DataStore.cust_details.customerID,
			name: DataStore.cust_details.name,
			email: DataStore.cust_details.email,
			username: DataStore.session.username,
			password: DataStore.cust_details.password,
			phone: DataStore.cust_details.phone
		};
	}

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
								editable={this.state.editable}
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
								editable={false}
							/>
							<Text style={styles.textstyle}>Password</Text>
							<TextInput
								placeholder="password"
								placeholderTextColor="rgba(255,255,255,0.7)"
								returnKeyType="next"
								secureTextEntry
								style={styles.input}
								value={this.state.password}
								editable={false}
							/>

							<Text style={styles.textstyle}>Phone Number</Text>
							<TextInput
								placeholder="phone number"
								placeholderTextColor="rgba(255,255,255,0.7)"
								returnKeyType="go"
								keyboardType="phone-pad"
								style={styles.input}
								value={this.state.phone}
								editable={false}
							/>

							<TouchableOpacity
								style={styles.buttonContainer}
								onPress={() => this.props.navigation.navigate('Home')}
							>
								<Text style={styles.buttonText}>Back</Text>
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
		flexDirection: 'column'
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
