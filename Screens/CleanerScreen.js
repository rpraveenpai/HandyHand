import React from 'react';
import { StyleSheet, View, ImageBackground, Image, Text, TouchableOpacity, Picker } from 'react-native';
import Datastore from '../Store/datastore';
import { observer } from 'mobx-react';

@observer
export default class CleanerScreen extends React.Component {
	static navigationOptions = {
		title: 'Cleaner'
	};
	constructor() {
		super();
		this.state = {
			CleanerWork: 'Complete Home Cleaning'
		};
	}
	_handlePress = () => {
		Datastore.updateSerInfo(this.state.CleanerWork);
		this.props.navigation.navigate('Address');
	};
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.PickerContainer}>
					<Picker
						selectedValue={this.state.CleanerWork}
						style={styles.pickerstyle}
						onValueChange={(itemValue) => this.setState({ CleanerWork: itemValue })}
					>
						<Picker.Item label="Complete Home Cleaning" value="Complete Home Cleaning" />
						<Picker.Item label="Plot Cleaning" value="Plot Cleaning" />
						<Picker.Item label="Office Cleaning" value="Office Cleaning" />
						<Picker.Item label="Septic Tank Cleaning" value="Septic Tank Cleaning" />
						<Picker.Item label="Others" value="Others" />
					</Picker>
				</View>
				<View style={styles.touchcontainer}>
					<TouchableOpacity
						style={styles.buttonContainer}
						onPress={() => {
							this._handlePress();
						}}
					>
						<Text style={styles.buttonText}>Continue</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.logoContainer}>
					<Image style={styles.logo} source={require('../assets/icons/cleaner.png')} />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		flex: 1,
		backgroundColor: '#eeeeee'
	},
	touchcontainer: {
		padding: 20
	},
	buttonContainer: {
		backgroundColor: '#0092ca',
		paddingVertical: 15,
		borderRadius: 5,
		marginBottom: 10
	},
	buttonText: {
		textAlign: 'center',
		color: '#eeeeee',
		fontWeight: '500'
	},
	PickerContainer: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 20
	},
	pickerstyle: {
		height: 70,
		width: '100%',
		color: '#222831'
	},
	logoContainer: {
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center'
	},
	logo: {
		width: '40%',
		height: '40%',
		resizeMode: 'contain'
	}
});
