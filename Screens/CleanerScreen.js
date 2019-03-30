import React from 'react';
import { StyleSheet, View, ImageBackground, Text, TouchableOpacity, Picker } from 'react-native';

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

	render() {
		return (
			<ImageBackground source={require('../assets/background/bg2.png')} style={styles.container}>
				<View style={styles.container}>
					<Text style={styles.title}>Cleaner</Text>
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
							onPress={() => this.props.navigation.navigate('Home')}
						>
							<Text style={styles.buttonText}>Continue</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		flex: 1
	},
	touchcontainer: {
		padding: 20
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
	},
	title: {
		fontSize: 25,
		textAlign: 'center',
		color: '#ffffff',
		marginTop: 20,
		fontWeight: 'bold',
		padding: 30
	},
	PickerContainer: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	pickerstyle: {
		height: 50,
		width: '100%',
		color: '#f5a623'
	}
});
