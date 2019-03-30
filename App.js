import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './Screens/HomeScreen';
import CLoginScreen from './Screens/CLoginScreen';
import UserSignupScreen from './Screens/UserSignupScreen';
import HandymanSignupScreen from './Screens/HandymanSignupScreen';
import SelectionScreen from './Screens/SelectionScreen';
import ElectricianScreen from './Screens/ElectricianScreen';
import PlumberScreen from './Screens/PlumberScreen';
import PainterScreen from './Screens/PainterScreen';
import GardenerScreen from './Screens/GardenerScreen';
import CarpenterScreen from './Screens/CarpenterScreen';
import CleanerScreen from './Screens/CleanerScreen';
import HLoginScreen from './Screens/HLoginScreen';
import SettingsScreen from './Screens/SettingsScreen';

export default class App extends React.Component {
	render() {
		return <AppContainer />;
	}
}

const AppNavigator = createStackNavigator(
	{
		Home: {
			screen: HomeScreen,
			navigationOptions: () => ({
				header: null
			})
		},
		CLogin: {
			screen: CLoginScreen,
			navigationOptions: () => ({
				header: null
			})
		},
		HLogin: {
			screen: HLoginScreen,
			navigationOptions: () => ({
				header: null
			})
		},
		UserSignup: {
			screen: UserSignupScreen,
			navigationOptions: () => ({
				header: null
			})
		},
		HandymanSignup: {
			screen: HandymanSignupScreen,
			navigationOptions: () => ({
				header: null
			})
		},
		Selection: {
			screen: SelectionScreen,
			navigationOptions: () => ({
				header: null
			})
		},
		Electrician: {
			screen: ElectricianScreen,
			navigationOptions: () => ({
				headerStyle: {
					backgroundColor: '#f5a623'
				},
				headerTitleStyle: {
					fontWeight: 'bold'
				}
			})
		},
		Plumber: {
			screen: PlumberScreen,
			navigationOptions: () => ({
				headerStyle: {
					backgroundColor: '#f5a623'
				},
				headerTitleStyle: {
					fontWeight: 'bold'
				}
			})
		},
		Painter: {
			screen: PainterScreen,
			navigationOptions: () => ({
				headerStyle: {
					backgroundColor: '#f5a623'
				},
				headerTitleStyle: {
					fontWeight: 'bold'
				}
			})
		},
		Gardener: {
			screen: GardenerScreen,
			navigationOptions: () => ({
				headerStyle: {
					backgroundColor: '#f5a623'
				},
				headerTitleStyle: {
					fontWeight: 'bold'
				}
			})
		},
		Carpenter: {
			screen: CarpenterScreen,
			navigationOptions: () => ({
				headerStyle: {
					backgroundColor: '#f5a623'
				},
				headerTitleStyle: {
					fontWeight: 'bold'
				}
			})
		},
		Cleaner: {
			screen: CleanerScreen,
			navigationOptions: () => ({
				headerStyle: {
					backgroundColor: '#f5a623'
				},
				headerTitleStyle: {
					fontWeight: 'bold'
				}
			})
		},
		Settings: {
			screen: SettingsScreen,
			navigationOptions: () => ({
				headerStyle: {
					backgroundColor: '#f5a623'
				},
				headerTitleStyle: {
					fontWeight: 'bold'
				}
			})
		}
	},
	{
		initialRouteName: 'Selection'
	}
);

const Root = createDrawerNavigator({
	Settings: {
		screen: SettingsScreen,
		navigationOptions: {
			title: 'Settings'
		}
	}
});

const AppContainer = createAppContainer(AppNavigator);
