import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	ImageBackground,
	KeyboardAvoidingView,
	Alert,
	TextInput,
	TouchableOpacity
} from 'react-native';
import { MapView, Permissions, Location } from 'expo';
import DataStore from '../Store/datastore';
import { observer } from 'mobx-react';
import { IntentLauncherAndroid } from 'expo';

@observer
export default class AddressScreen extends React.Component {
	static navigationOptions = {
		title: 'Address'
	};
	constructor(props) {
		super(props);
		this.state = {
			name: DataStore.cust_details.name,
			phone: DataStore.cust_details.phone
		};
	}

	_next = () => {
		DataStore.updateOPhone(this.state.phone);
		DataStore.updateOCName(this.state.name);
		this.props.navigation.navigate('Location');
	};

	_check = async () => {
		let providers = await Location.getProviderStatusAsync();

		if (providers.locationServicesEnabled == true) {
			this._next();
		} else {
			Alert.alert('Location Services must be on to proceed further', 'Please turn on location', [
				{
					text: 'Cancel',
					onPress: () => this.props.navigation.navigate('Address'),
					style: 'cancel'
				},
				{
					text: 'OK',
					onPress: () =>
						IntentLauncherAndroid.startActivityAsync(IntentLauncherAndroid.ACTION_LOCATION_SOURCE_SETTINGS)
				}
			]);
		}
	};

	render() {
		return (
			<ImageBackground source={require('../assets/background/bgwhite.png')} style={styles.container}>
				<View style={styles.container}>
					<View style={styles.formContainer}>
						<Text style={styles.textstyle}>Name</Text>
						<TextInput
							placeholder="Name"
							placeholderTextColor="rgba(0,0,0,0.5)"
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
							placeholderTextColor="rgba(0,0,0,0.5)"
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
								this._check();
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
		fontSize: 20,
		fontWeight: 'bold',
		color: '#2a363b'
	},
	formContainer: {
		justifyContent: 'space-around',
		padding: 20,
		flexDirection: 'column'
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
