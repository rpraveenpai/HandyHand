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
				<ImageBackground source={require('../assets/background/bgwhite.png')} style={styles.container}>
					<View style={styles.container}>
						<View style={styles.profilecontainer}>
							<Text style={styles.textstyle}>Username</Text>
							<TextInput
								placeholder="username"
								placeholderTextColor="rgba(0,0,0,0.5)"
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
								placeholderTextColor="rgba(0,0,0,0.5)"
								returnKeyType="next"
								style={styles.input}
								value={this.state.name}
								editable={this.state.editable}
							/>
							<Text style={styles.textstyle}>Email</Text>
							<TextInput
								placeholder="email"
								placeholderTextColor="rgba(0,0,0,0.5)"
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
								placeholderTextColor="rgba(0,0,0,0.5)"
								returnKeyType="next"
								secureTextEntry
								style={styles.input}
								value={this.state.password}
								editable={false}
							/>

							<Text style={styles.textstyle}>Phone Number</Text>
							<TextInput
								placeholder="phone number"
								placeholderTextColor="rgba(0,0,0,0.5)"
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
	},
	textstyle: {
		fontSize: 15,
		fontWeight: 'bold',
		color: '#2a363b'
	},
	input: {
		height: 40,
		backgroundColor: 'rgba(255,255,255,0.5)',
		marginBottom: 10,
		color: 'rgba(0,0,0,0.8)',
		paddingHorizontal: 10,
		borderColor: '#f5a623',
		borderRadius: 4,
		borderWidth: 2,
		fontWeight: 'bold'
	},

	buttonContainer: {
		backgroundColor: '#f5a623',
		paddingVertical: 15,
		borderRadius: 5,
		marginBottom: 10,
		justifyContent: 'space-around',
		alignItems: 'center',
		shadowColor: '#000000',
		elevation: 7,
		shadowRadius: 5,
		shadowOpacity: 1.0,
		height: 50
	},
	buttonText: {
		textAlign: 'center',
		color: '#FFFFFF',
		fontWeight: '500'
	}
});
