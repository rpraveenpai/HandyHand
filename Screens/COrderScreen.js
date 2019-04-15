import React, { Component } from 'react';
import { ImageBackground, StyleSheet, FlatList, Text, View, TouchableOpacity } from 'react-native';
import DataStore from '../Store/datastore';
import { observer } from 'mobx-react';

@observer
export default class COrderScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: DataStore.order.corder,
			customerID: DataStore.cust_details.customerID
		};
	}

	renderItem = ({ item }) => {
		return (
			<View style={{ flex: 1, flexDirection: 'row', marginBottom: 3 }}>
				<View style={{ flex: 1, justifycontent: 'center' }}>
					<Text style={styles.title}>Order ID: {item.Order_ID}</Text>
					<Text style={styles.subtitle}>StatusInfo: {item.StatusInfo}</Text>
					<Text style={styles.subtitle}>Date: {item.Order_Date}</Text>
				</View>
			</View>
		);
	};

	renderSeperator = () => {
		return <View style={{ height: 1, width: '100%', backgroundColor: '#000' }} />;
	};
	render() {
		return (
			<ImageBackground source={require('../assets/background/bgwhite.png')} style={styles.container}>
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
	button: {
		padding: 20
	},
	title: {
		fontSize: 18,
		color: '#000',
		fontWeight: 'bold',
		marginBottom: 5
	},
	subtitle: {
		fontSize: 16,
		color: '#f5a623'
	},
	buttonContainer: {
		backgroundColor: '#f5a623',
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
