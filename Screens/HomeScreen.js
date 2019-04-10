import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import DataStore from '../Store/datastore';
import { observer } from 'mobx-react';
import { MenuButton } from '../components/MenuButton';

@observer
export default class HomeScreen extends Component {
	static navigationOptions = {
		title: 'Home'
	};
	constructor(props) {
		super(props);
		this.state = {
			service: ''
		};
	}

	_electrician = () => {
		DataStore.updateOService('Electrician');
		this.props.navigation.navigate('Electrician');
	};

	_plumber = () => {
		DataStore.updateOService('Plumber');
		this.props.navigation.navigate('Plumber');
	};

	_gardener = () => {
		DataStore.updateOService('Gardener');
		this.props.navigation.navigate('Gardener');
	};

	_painter = () => {
		DataStore.updateOService('Painter');
		this.props.navigation.navigate('Painter');
	};

	_carpenter = () => {
		DataStore.updateOService('Carpenter');
		this.props.navigation.navigate('Carpenter');
	};

	_cleaner = () => {
		DataStore.updateOService('Cleaner');
		this.props.navigation.navigate('Cleaner');
	};

	render() {
		return (
			<ImageBackground source={require('../assets/background/bgwhite.png')} style={styles.container}>
				{/*hamburger menu*/}
				<MenuButton
					cb={() => {
						this.props.navigation.navigate('Settings');
					}}
				/>

				{/*Handyhand Icon showing infront*/}
				<View style={styles.top}>
					<Image source={require('../assets/icons/logo.png')} style={styles.logo} />
				</View>

				{/*All the handyman services as buttons*/}
				<View style={styles.menuContainer}>
					<View style={styles.menuItem}>
						<TouchableOpacity
							onPress={() => {
								this._electrician();
							}}
						>
							<Image source={require('../assets/icons/electrician.png')} style={styles.image} />
						</TouchableOpacity>
						<Text style={styles.menuText}>Electrician</Text>
					</View>

					<View style={styles.menuItem}>
						<TouchableOpacity
							onPress={() => {
								this._gardener();
							}}
						>
							<Image source={require('../assets/icons/gardener.png')} style={styles.image} />
						</TouchableOpacity>
						<Text style={styles.menuText}>Gardener</Text>
					</View>

					<View style={styles.menuItem}>
						<TouchableOpacity
							onPress={() => {
								this._plumber();
							}}
						>
							<Image source={require('../assets/icons/plumber.png')} style={styles.image} />
						</TouchableOpacity>
						<Text style={styles.menuText}>Plumber</Text>
					</View>

					<View style={styles.menuItem}>
						<TouchableOpacity
							onPress={() => {
								this._cleaner();
							}}
						>
							<Image source={require('../assets/icons/cleaner.png')} style={styles.image} />
						</TouchableOpacity>
						<Text style={styles.menuText}>Cleaner</Text>
					</View>

					<View style={styles.menuItem}>
						<TouchableOpacity
							onPress={() => {
								this._carpenter();
							}}
						>
							<Image source={require('../assets/icons/carpenter.png')} style={styles.image} />
						</TouchableOpacity>
						<Text style={styles.menuText}>Carpenter</Text>
					</View>

					<View style={styles.menuItem}>
						<TouchableOpacity
							onPress={() => {
								this._painter();
							}}
						>
							<Image source={require('../assets/icons/painter.png')} style={styles.image} />
						</TouchableOpacity>
						<Text style={styles.menuText}>Painter</Text>
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
	top: {
		height: '50%',
		alignItems: 'center',
		justifyContent: 'center'
	},
	image: {
		width: '100%',
		height: '100%',
		borderRadius: 50,
		borderWidth: 3,
		borderColor: 'black'
	},
	menuContainer: {
		height: '40%',
		flexWrap: 'wrap'
	},
	menuItem: {
		width: '33.333333%',
		height: '50%',
		padding: 20
	},
	menuText: {
		fontSize: 15,
		color: '#2a363b',
		fontWeight: 'bold',
		textAlign: 'center'
	},
	logo: {
		flex: 1,
		height: '100%',
		width: '100%',
		resizeMode: 'contain'
	}
});
