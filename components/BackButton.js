import React from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';

const WIDTH = Dimensions.get('window').width;

export const BackButton = function(props) {
	const cb = props.cb ? props.cb : () => console.log('Callback function not passed to CurrentLocatiion Button');

	return (
		<TouchableOpacity
			onPress={() => {
				cb();
			}}
			style={styles.container}
		>
			<Text style={styles.Text}>Back</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		zIndex: 9,
		flex: 1,
		position: 'absolute',
		flexDirection: 'column',
		width: WIDTH - 40,
		height: 50,
		bottom: 80,
		left: 20,
		borderRadius: 10,
		backgroundColor: '#f5a623',
		alignItems: 'center',
		shadowColor: '#000000',
		elevation: 7,
		shadowRadius: 5,
		shadowOpacity: 1.0,
		justifyContent: 'center'
	},
	Text: {
		fontSize: 15,
		fontWeight: 'bold',
		color: 'white'
	}
});
