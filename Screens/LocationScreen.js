import React from 'react';
import { Text, View } from 'react-native';
import { MapView } from 'expo';
import { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

export default class LocationScreen extends React.Component {
	static navigationOptions = {
		title: 'Location'
	};
	constructor(props) {
		super(props);
		this.state = {
			x: 0
		};
	}

	render() {
		return (
			<MapView
				provider={PROVIDER_GOOGLE}
				style={{ flex: 1 }}
				region={{
					latitude: 9.9816,
					longitude: 76.2999,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421
				}}
			/>

			//<Text>hi</Text>
		);
	}
}
