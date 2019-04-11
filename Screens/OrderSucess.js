import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity, BackHandler, ToastAndroid } from 'react-native';
import DataStore from '../Store/datastore';
import { observer } from 'mobx-react';

@observer
export default class OrderSuccess extends Component {
	static navigationOptions = {
		title: 'Order Success'
	};

	constructor(props) {
		super(props);
		this.state = {
			orderID: DataStore.order_details.orderID,
			name: DataStore.order_details.cname,
			phone: DataStore.order_details.phone,
			service: DataStore.order_details.service,
			serviceInfo: DataStore.order_details.serviceInfo
		};
	}

	_alert = () => {
		alert('You will be informed if your order gets accepted.');
		this.props.navigation.navigate('Home');
	};

	//Code to disable hardware back button
	componentDidMount() {
		BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
	}

	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
	}

	handleBackButton() {
		ToastAndroid.show('Press Okay to continue', ToastAndroid.SHORT);
		return true;
	}

	render() {
		return (
			<ImageBackground source={require('../assets/background/bgwhite.png')} style={styles.container}>
				<View style={styles.container}>
					<View style={styles.orderContainer}>
						<Text style={styles.title}>ORDER SUCCESS</Text>
						<Text style={styles.orderText}>Order ID: {this.state.orderID}</Text>
						<Text style={styles.orderText}>Name: {this.state.name}</Text>
						<Text style={styles.orderText}>Phone: {this.state.phone}</Text>
						<Text style={styles.orderText}>Service: {this.state.service}</Text>
						<Text style={styles.orderText}>Service Info: {this.state.serviceInfo}</Text>
						<TouchableOpacity
							style={styles.buttonContainer}
							onPress={() => {
								this._alert();
							}}
						>
							<Text style={styles.buttonText}>Okay</Text>
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
		height: '100%',
		justifyContent: 'center'
	},
	title: {
		fontSize: 35,
		fontWeight: 'bold',
		padding: 10,
		color: '#fff'
	},
	orderContainer: {
		flexDirection: 'column',
		alignItems: 'center',
		borderRadius: 10,
		backgroundColor: '#f5a623',
		marginVertical: 20,
		marginHorizontal: 30
	},
	orderText: {
		fontSize: 15,
		fontWeight: 'bold',
		padding: 5
	},
	buttonContainer: {
		backgroundColor: '#fff',
		paddingVertical: 15,
		width: 60,
		borderRadius: 2,
		marginBottom: 10,
		shadowColor: '#000000',
		elevation: 7,
		shadowRadius: 5,
		shadowOpacity: 1.0
	},
	buttonText: {
		textAlign: 'center',
		color: '#f5a623',
		fontWeight: 'bold',
		fontSize: 20
	}
});
