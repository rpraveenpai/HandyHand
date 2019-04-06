import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MapView, Permissions, Location } from 'expo';
import { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { IntentLauncherAndroid } from 'expo';
import { CurrentLocationButton } from '../components/CurrentLocationButton';

export default class LocationScreen extends React.Component {
	static navigationOptions = {
		title: 'Location'
	};
	constructor(props) {
		super(props);
		this.state = {
			region: null
		};

		this._getALocationAsync();
	}

	_getALocationAsync = async () => {
		let providers = await Location.getProviderStatusAsync();
		if (providers.locationServicesEnabled == false) {
			let { status } = await Permissions.askAsync(Permissions.LOCATION);
			if (status !== 'granted') {
				console.log('Permission to access location was denied.');
			} else {
				await IntentLauncherAndroid.startActivityAsync(IntentLauncherAndroid.ACTION_LOCATION_SOURCE_SETTINGS);
			}
		}

		let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
		let region = {
			longitude: location.coords.longitude,
			latitude: location.coords.latitude,
			latitudeDelta: 0.0922,
			longitudeDelta: 0.0421
		};
		this.setState({ region: region });
	};

	centerMap() {
		const { latitude, longitude, latitudeDelta, longitudeDelta } = this.state.region;

		this.map.animateToRegion({
			latitude,
			longitude,
			longitudeDelta,
			latitudeDelta
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<CurrentLocationButton
					cb={() => {
						this.centerMap();
					}}
				/>
				<MapView
					provider={PROVIDER_GOOGLE}
					style={{ flex: 1 }}
					initialRegion={this.state.region}
					showsUserLocation={true}
					showsCompass={true}
					rotateEnabled={false}
					ref={(map) => {
						this.map = map;
					}}
					style={{ flex: 1 }}
				/>
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
