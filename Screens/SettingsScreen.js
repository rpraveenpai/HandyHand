import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
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
			<ImageBackground source={require('../assets/background/bg2.png')} style={styles.menucontainer}>
				<View style={styles.menucontainer}>
					<View style={styles.logoContainer}>
						<Image style={styles.logo} source={require('../assets/icons/logo.png')} />
					</View>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
						<Text style={styles.menutext}>Home</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
						<Text style={styles.menutext}>Profile</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
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
		padding: 2,
		justifyContent: 'flex-start'
	},
	menutext: {
		color: 'white',
		fontSize: 25,
		fontWeight: 'bold',
		flexDirection: 'row',
		alignItems: 'stretch',
		padding: 10,
		borderBottomWidth: 5,
		backgroundColor: '#f5a623',
		borderRadius: 10
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
	}
});
