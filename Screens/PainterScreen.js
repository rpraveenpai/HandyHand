import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Picker } from 'react-native';
import Datastore from '../Store/datastore';
import { observer } from 'mobx-react';

@observer
export default class PainterScreen extends React.Component {
	static navigationOptions = {
		title: 'Painter'
	};
	constructor() {
		super();

		this.state = {
			PainterWork: 'General Painter Work'
		};
	}
	_handlePress = () => {
		Datastore.updateSerInfo(this.state.PainterWork);
		this.props.navigation.navigate('Address');
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.PickerContainer}>
					<Picker
						selectedValue={this.state.PainterWork}
						style={styles.pickerstyle}
						onValueChange={(itemValue) => this.setState({ PainterWork: itemValue })}
					>
						<Picker.Item label="General Painting Work" value="General Painting Work" />
						<Picker.Item label="Others" value="Others" />
					</Picker>
				</View>
				<View style={styles.touchcontainer}>
					<TouchableOpacity
						style={styles.buttonContainer}
						onPress={() => {
							this._handlePress();
						}}
					>
						<Text style={styles.buttonText}>Continue</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.logoContainer}>
					<Image style={styles.logo} source={require('../assets/icons/painter.png')} />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		flex: 1,
		backgroundColor: '#eeeeee'
	},
	touchcontainer: {
		padding: 20
	},
	buttonContainer: {
		backgroundColor: '#0092ca',
		paddingVertical: 15,
		borderRadius: 5,
		marginBottom: 10
	},
	buttonText: {
		textAlign: 'center',
		color: '#eeeeee',
		fontWeight: '500'
	},
	PickerContainer: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 20
	},
	pickerstyle: {
		height: 70,
		width: '100%',
		color: '#222831'
	},
	logoContainer: {
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center'
	},
	logo: {
		width: '40%',
		height: '40%',
		resizeMode: 'contain'
	}
});
