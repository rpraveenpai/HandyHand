import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class SelectionScreen extends React.Component {
	static navigationOptions = {
		title: 'Selection'
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.logoContainer}>
					<Image style={styles.logo} source={require('../assets/icons/logo.png')} />
				</View>
				<View style={styles.menuContainer}>
					<View style={styles.menuItem}>
						<TouchableOpacity onPress={() => this.props.navigation.navigate('CLogin')}>
							<Image source={require('../assets/icons/user.png')} style={styles.image} />
						</TouchableOpacity>
						<Text style={styles.buttonText}>Customer</Text>
					</View>
					<View style={styles.menuItem}>
						<TouchableOpacity onPress={() => this.props.navigation.navigate('HLogin')}>
							<Image source={require('../assets/icons/handyman.png')} style={styles.image} />
						</TouchableOpacity>
						<Text style={styles.buttonText}>Handyman</Text>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		backgroundColor: '#eeeeee'
	},
	buttonText: {
		textAlign: 'center',
		color: '#222831',
		fontWeight: '700',
		fontSize: 20
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
	menuContainer: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center',
		justifyContent: 'space-between',
		padding: 20
	},
	menuItem: {
		width: '33.333333%',
		height: '40%'
	},
	image: {
		width: '100%',
		height: '100%',
		opacity: 0.8
	}
});
