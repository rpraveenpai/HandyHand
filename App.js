import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import DetailsScreen from "./Screens/DetailsScreen";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import UserSignupScreen from "./Screens/UserSignupScreen";
import HandymanSignupScreen from "./Screens/HandymanSignupScreen";
import RegisterSelection from "./Screens/RegisterSelection";


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
    Details: {
      screen: DetailsScreen,
      navigationOptions: () => ({
        header: null
      })
    },
    Login: {
      screen: LoginScreen,
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
    Register: {
      screen: RegisterSelection,
      navigationOptions: () => ({
        header: null
      })
    },    
  },
  {
    initialRouteName: "Login"
  }
);

const AppContainer = createAppContainer(AppNavigator);
