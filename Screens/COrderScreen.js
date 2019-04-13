import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	FlatList,
	Text,
	View,
	Alert,
	ActivityIndicator,
	TouchableOpacity,
	Platform,
	ScrollView
} from 'react-native';
import DataStore from '../Store/datastore';
import { observer } from 'mobx-react';
import axios from 'axios';

@observer
export default class COrderScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: DataStore.order.corder,
			//isLoading: true,
			customerID: DataStore.cust_details.customerID
		};
		alert(DataStore.order.corder);
	}

	/*_getData = () => {
		var self = this;
		axios
			.post('http://handyhand.herokuapp.com/customerorder.php/', {
				customerID: self.state.customerID
			})
			.then(function(response) {
				self.setState({
					isLoading: false,
					data: response.data
				});
				alert(self.state.data);
			})
			.catch(function(error) {
				alert(error);
			});
	};*/

	render() {
		return (
			<View style={styles.container}>
				<FlatList
					data={this.state.data}
					keyExtractor={(item, index) => index.toString()}
					renderItem={({ item }) => (
						<Text styles={styles.text}>
							{item.Order_ID}
							{item.StatusInfo}
						</Text>
					)}
				/>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.OS === 'ios' ? 20 : 0
	},

	separator: {
		height: 2,
		backgroundColor: 'rgba(0,0,0,0.5)',
		width: '100%'
	},

	text: {
		fontSize: 18,
		color: 'black',
		padding: 50
	}
});
