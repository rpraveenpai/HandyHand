import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default class SettingsScreen extends Component {
	static navigationOptions = {
		title: 'Settings'
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ImageBackground source={require('../assets/background/bg2.png')} style={styles.container}>
				<View style={styles.container}>
					<Text style={styles.h2text}>Menu</Text>
					<FlatList
						data={[ { key: 'Home' } ]}
						showsVerticalScrollIndicator={false}
						renderItem={({ item }) => (
							<View style={styles.flatview}>
								<TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
									<Text style={styles.item}>{item.key}</Text>
								</TouchableOpacity>
							</View>
						)}
						keyExtractor={(item, index) => index.toString()}
					/>
					<FlatList
						data={[ { key: 'Profile' } ]}
						showsVerticalScrollIndicator={false}
						renderItem={({ item }) => (
							<View style={styles.flatview}>
								<TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
									<Text style={styles.item}>{item.key}</Text>
								</TouchableOpacity>
							</View>
						)}
						keyExtractor={(item, index) => index.toString()}
					/>
					<FlatList
						data={[ { key: 'Logout' } ]}
						showsVerticalScrollIndicator={false}
						renderItem={({ item }) => (
							<View style={styles.flatview}>
								<TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
									<Text style={styles.item}>{item.key}</Text>
								</TouchableOpacity>
							</View>
						)}
						keyExtractor={(item, index) => index.toString()}
					/>
				</View>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		//marginTop: 50,
		justifyContent: 'space-evenly',
		alignItems: 'center',
		paddingTop: getStatusBarHeight()
		//backgroundColor: '#F5FCFF'
	},
	h2text: {
		//marginTop: 10,
		//fontFamily: 'Helvetica',
		backgroundColor: '#f5a623',
		fontSize: 36,
		fontWeight: 'bold',
		padding: 10,
		justifyContent: 'space-between'
	},
	flatview: {
		//justifyContent: 'space-between',
		paddingTop: 10,
		borderRadius: 2,
		flexDirection: 'row',
		backgroundColor: 'transparent'
	},
	item: {
		color: '#f5a623',
		fontSize: 25,
		fontWeight: 'bold'
	}
});
