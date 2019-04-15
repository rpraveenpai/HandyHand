import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { MenuButton } from '../components/MenuButton';
import axios from 'axios';
import DataStore from '../Store/datastore';
import { observer } from 'mobx-react';

@observer
export default class SelectionScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			service: DataStore.handy_details.service
		};
	}

	_getData = () => {
		var self = this;
		axios
			.post('http://handyhand.herokuapp.com/handymanorder.php/', {
				service: self.state.service
			})
			.then(function(response) {
				DataStore.updateHorder(JSON.parse(response.data));
				self.props.navigation.navigate('HOrder');
			})
			.catch(function(error) {
				alert(error);
			});
	};

	render() {
		return (
			<ImageBackground source={require('../assets/background/bgwhite.png')} style={styles.container}>
				{/*hamburger menu*/}
				<MenuButton
					cb={() => {
						this.props.navigation.navigate('HSettings');
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
								this._getData();
							}}
						>
							<Image source={require('../assets/icons/orders.png')} style={styles.image} />
						</TouchableOpacity>
						<Text style={styles.menuText}>Orders</Text>
					</View>

					<View style={styles.menuItem}>
						<TouchableOpacity>
							<Image source={require('../assets/icons/accepted.png')} style={styles.image} />
						</TouchableOpacity>
						<Text style={styles.menuText}>Accepted Orders</Text>
					</View>

					<View style={styles.menuItem}>
						<TouchableOpacity>
							<Image source={require('../assets/icons/completed.png')} style={styles.image} />
						</TouchableOpacity>
						<Text style={styles.menuText}>Completed Orders</Text>
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
		flexWrap: 'wrap',
		flexDirection: 'row'
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
