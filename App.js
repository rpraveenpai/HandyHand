import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import DetailsScreen from './Screens/DetailsScreen';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from "./Screens/LoginScreen";



export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: 
    {
      screen: HomeScreen,
      navigationOptions: () => ({
       header: null,
      }),
    },
    Details:
    {
      screen: DetailsScreen,
      navigationOptions: () => ({
        header: null,
       }),
    },
    Login:
    {
      screen: LoginScreen,
      navigationOptions: () => ({
        header: null,
       }),
    },  
    
  },
  {
    initialRouteName: "Login"
  }
);

const AppContainer = createAppContainer(AppNavigator);