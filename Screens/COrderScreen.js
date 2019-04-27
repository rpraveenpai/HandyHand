import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, View, TouchableOpacity } from 'react-native';
import DataStore from '../Store/datastore';
import { observer } from 'mobx-react';
import axios from 'axios';

@observer
export default class COrderScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: DataStore.order.corder,
			customerID: DataStore.cust_details.customerID
		};
	}

	//checking if order is completed. then fetching handyman data to datastore.
	_finalOrder = (item) => {
		this.setState({ phone: item.Hphone });
		DataStore.updateHandyOrderId(item.Order_ID);

		if (item.StatusInfo == 'Incomplete') {
			alert('Your order is not accepted.');
		} else if (item.StatusInfo == 'Completed') {
			alert('Your order is completed.');
		} else {
			var self = this;
			axios
				.post('http://handyhand.herokuapp.com/get_handydata.php/', {
					orderid: item.Order_ID
				})
				.then(function(response) {
					if (response.data.res == 'success') {
						DataStore.updateHandyPhone(response.data.phone);
						DataStore.updateHandyToken(response.data.token);
						self.props.navigation.navigate('COrderComplete');
					} else {
						alert('Failed');
					}
				})
				.catch(function(error) {
					alert(error);
				});
		}
	};

	//function to render items in flatlist.
	renderItem = ({ item }) => {
		return (
			<View style={{ flex: 1, flexDirection: 'row', marginBottom: 3 }}>
				<View style={{ flex: 1, justifycontent: 'center' }}>
					<Text style={styles.title} onPress={this._finalOrder.bind(this, item)}>
						Order ID: {item.Order_ID}
					</Text>
					<Text style={styles.subtitle}>Service: {item.TypeOfService}</Text>
					<Text style={styles.subtitle}>StatusInfo: {item.StatusInfo}</Text>
					<Text style={styles.subtitle}>Date: {item.Order_Date}</Text>
				</View>
			</View>
		);
	};

	//function to draw a line to seperate each items in flatlist.
	renderSeperator = () => {
		return <View style={{ height: 1, width: '100%', backgroundColor: '#222831' }} />;
	};
	render() {
		return (
			<View style={styles.container}>
				<FlatList
					data={this.state.data}
					renderItem={this.renderItem}
					keyExtractor={(item, index) => index.toString()}
					ItemSeparatorComponent={this.renderSeperator}
				/>

				<View style={styles.button}>
					<TouchableOpacity
						style={styles.buttonContainer}
						onPress={() => {
							this.props.navigation.navigate('Settings');
						}}
					>
						<Text style={styles.buttonText}>Back</Text>
					</TouchableOpacity>
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
		backgroundColor: '#eeeeee'
	},
	button: {
		padding: 20
	},
	title: {
		fontSize: 18,
		color: '#222831',
		fontWeight: 'bold',
		marginBottom: 5
	},
	subtitle: {
		fontSize: 16,
		color: '#0092ca'
	},
	buttonContainer: {
		backgroundColor: '#0092ca',
		paddingVertical: 15,
		paddingHorizontal: 20,
		borderRadius: 2,
		marginBottom: 10,
		shadowColor: '#000000',
		elevation: 7,
		shadowRadius: 5,
		shadowOpacity: 1.0
	},
	buttonText: {
		textAlign: 'center',
		color: '#FFFFFF',
		fontWeight: '500'
	}
});
