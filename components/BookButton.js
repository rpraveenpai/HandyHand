import React from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const WIDTH = Dimensions.get('window').width;

export const BookButton = function(props) {
	return (
		<TouchableOpacity onPress={() => {}} style={styles.container}>
			<Text>Book</Text>
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
	}
});
