import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

export default class COrderScreen extends Component {
	constructor() {
		super();
		this.state = {
			dataSource: []
		};
	}

	renderItem = () => {
		return (
			<View>
				<Text />
			</View>
		);
	};

	componentDidMount() {}
	render() {
		return (
			<View style={styles.container}>
				<FlatList data={this.state.dataSource} renderItem={this.renderItem} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	}
});
