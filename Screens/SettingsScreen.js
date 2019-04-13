import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import axios from 'axios';
import DataStore from '../Store/datastore';
import { observer } from 'mobx-react';

export default class SettingsScreen extends Component {
	static navigationOptions = {
		title: 'Settings'
	};

	constructor(props) {
		super(props);
	}

	_logout = () => {
		var self = this;
		axios
			.post('http://handyhand.herokuapp.com/logout.php/')
			.then(function(response) {
				if (response.data == 'Logged Out') {
					self.props.navigation.navigate('Selection');
				} else {
					alert('Failed');
				}
			})
			.catch(function(error) {
				alert(error);
			});
	};

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
					<TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('COrder')}>
						<Text style={styles.menutext}>Orders</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.button}
						onPress={() => {
							this._logout();
						}}
					>
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
