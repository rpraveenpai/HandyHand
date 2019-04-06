import React, { Component } from 'react';
import {
	AppRegistry,
	View,
	Text,
	StyleSheet,
	ImageBackground,
	Image,
	TouchableOpacity,
	NetInfo,
	Alert,
	BackHandler,
	Icon
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Datastore from '../Store/datastore';

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
		this.setState({ service: 'Electrician' });
		Datastore.updateOService(this.state.service);
		this.props.navigation.navigate('Electrician');
	};

	_plumber = () => {
		this.setState({ service: 'Plumber' });
		Datastore.updateOService(this.state.service);
		this.props.navigation.navigate('Plumber');
	};

	_gardener = () => {
		this.setState({ service: 'Gardener' });
		Datastore.updateOService(this.state.service);
		this.props.navigation.navigate('Gardener');
	};

	_painter = () => {
		this.setState({ service: 'Painter' });
		Datastore.updateOService(this.state.service);
		this.props.navigation.navigate('Painter');
	};

	_carpenter = () => {
		this.setState({ service: 'Carpenter' });
		Datastore.updateOService(this.state.service);
		this.props.navigation.navigate('Carpenter');
	};

	_cleaner = () => {
		this.setState({ service: 'Cleaner' });
		Datastore.updateOService(this.state.service);
		this.props.navigation.navigate('Cleaner');
	};

	render() {
		return (
			<ImageBackground source={require('../assets/background/bg.jpg')} style={styles.container}>
				{/*hamburger menu*/}
				<View style={styles.settingsmenu}>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')}>
						<Image source={require('../assets/icons/list.png')} style={styles.settingslogo} />
					</TouchableOpacity>
				</View>

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
		opacity: 0.8,
		borderColor: '#fff',
		borderWidth: 3,
		borderRadius: 90
	},
	menuContainer: {
		height: '40%',
		flexDirection: 'column',
		flexWrap: 'wrap'
	},
	menuItem: {
		width: '33.333333%',
		height: '50%',
		padding: 20
	},
	menuText: {
		fontSize: 15,
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center'
	},
	logo: {
		flex: 1,
		height: '100%',
		width: '100%',
		resizeMode: 'contain'
	},
	settingsmenu: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'flex-start',
		//used to get status bar height to remove overlpapping of menu.
		paddingTop: getStatusBarHeight()
	},
	settingslogo: {
		height: 30,
		width: 30,
		justifyContent: 'flex-start'
	}
});
