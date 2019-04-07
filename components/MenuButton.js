import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export const MenuButton = function(props) {
	const cb = props.cb ? props.cb : () => console.log('Callback function not passed to Menu Button');

	return (
		<View style={[ styles.container ]}>
			<MaterialIcons
				name="menu"
				color="#f5a623"
				size={25}
				onPress={() => {
					cb();
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		zIndex: 9,
		position: 'absolute',
		width: 45,
		height: 45,
		backgroundColor: '#2a363b',
		top: HEIGHT - HEIGHT + 30,
		right: WIDTH - 60,
		borderRadius: 5,
		shadowColor: '#000000',
		elevation: 7,
		shadowRadius: 5,
		shadowOpacity: 1.0,
		justifyContent: 'space-around',
		alignItems: 'center'
	}
});
