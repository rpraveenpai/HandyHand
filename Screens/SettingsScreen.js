import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default class SettingsScreen extends Component {
	static navigationOptions = {
		title: 'Settings'
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ImageBackground source={require('../assets/background/bgwhite.png')} style={styles.menucontainer}>
				<View style={styles.menucontainer}>
					<View style={styles.logoContainer}>
						<Image style={styles.logo} source={require('../assets/icons/logo.png')} />
					</View>

					<TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Home')}>
						<Text style={styles.menutext}>Home</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Profile')}>
						<Text style={styles.menutext}>Profile</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Corder')}>
						<Text style={styles.menutext}>Orders</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Home')}>
						<Text style={styles.menutext}>Logout</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	menucontainer: {
		flex: 1,
		justifyContent: 'flex-start',
		paddingHorizontal: 10
	},
	menutext: {
		color: '#2a363b',
		fontSize: 20,
		fontWeight: 'bold',
		flexDirection: 'row'
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
	button: {
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
	}
});
