import React, { Component } from 'react';
import { AppRegistry, StyleSheet, FlatList, Text, View, Alert, ActivityIndicator, Platform } from 'react-native';
import DataStore from '../Store/datastore';
import { observer } from 'mobx-react';
import axios from 'axios';

@observer
export default class COrderScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataSource: [],
			isLoading: true,
			customerID: DataStore.cust_details.customerID
		};
	}

	componentDidMount() {
		var self = this;
		axios
			.post('http://handyhand.herokuapp.com/customerorder.php/', {
				customerID: this.state.customerID
			})
			.then(function(response) {
				if (response.data) {
					self.setState({
						isLoading: false,
						dataSource: response.data
					});
				} else {
					alert('Cannot fetch data');
				}
			})
			.catch(function(error) {
				alert(error);
			});
	}

	render() {
		if (this.state.isLoading) {
			return (
				<View style={{ flex: 1, paddingTop: 20 }}>
					<ActivityIndicator />
				</View>
			);
		}

		return (
			<View style={styles.MainContainer}>
				<FlatList
					data={this.state.dataSource}
					keyExtractor={(item, index) => index.toString()}
					renderItem={({ item }) => <Text>{item.Order_ID}</Text>}
				/>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	MainContainer: {
		justifyContent: 'center',
		flex: 1,
		margin: 10,
		paddingTop: Platform.OS === 'ios' ? 20 : 0
	},

	FlatListItemStyle: {
		padding: 10,
		fontSize: 18,
		height: 44
	}
});
