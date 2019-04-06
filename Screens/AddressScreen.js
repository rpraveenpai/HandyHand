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
export default class AddressScreen extends React.Component {
	static navigationOptions = {
		title: 'Address'
	};
	constructor(props) {
		super(props);
		this.state = {
			name: DataStore.cust_details.name,
			phone: DataStore.cust_details.phone,
			customerID: DataStore.cust_details.customerID
		};
	}

	_next = () => {
		DataStore.updateOPhone(this.state.phone);
		DataStore.updateCName(this.state.name);
		this.props.navigation.navigate('Home');
	};

	render() {
		return (
			<ImageBackground source={require('../assets/background/bg2.png')} style={styles.container}>
				<View style={styles.container}>
					<View style={styles.formContainer}>
						<Text style={styles.textstyle}>Name</Text>
						<TextInput
							placeholder="Name"
							placeholderTextColor="rgba(255,255,255,0.7)"
							returnKeyType="next"
							onSubmitEditing={() => this.PhoneInput.focus()}
							autoCapitalize="none"
							autoCorrect={false}
							style={styles.input}
							value={this.state.name}
							onChangeText={(name) => this.setState({ name })}
						/>
						<Text style={styles.textstyle}>Phone Number</Text>
						<TextInput
							placeholder="Phone Number"
							placeholderTextColor="rgba(255,255,255,0.7)"
							returnKeyType="go"
							keyboardType="phone-pad"
							style={styles.input}
							value={this.state.phone}
							ref={(input) => (this.PhoneInput = input)}
							onChangeText={(phone) => this.setState({ phone })}
						/>

						<TouchableOpacity
							style={styles.buttonContainer}
							onPress={() => {
								this._next();
							}}
						>
							<Text style={styles.buttonText}>Next</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ImageBackground>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		height: '100%'
	},
	textstyle: {
		fontSize: 15,
		fontWeight: 'bold',
		color: 'white'
	},
	formContainer: {
		justifyContent: 'space-around',
		padding: 20,
		flexDirection: 'column'
	},
	input: {
		height: 40,
		backgroundColor: 'rgba(255,255,255,0.2)',
		marginBottom: 10,
		color: '#FFF',
		paddingHorizontal: 10,
		borderRadius: 5
	},

	logo: {
		width: '100%',
		height: '50%',
		resizeMode: 'contain'
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
