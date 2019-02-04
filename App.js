import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import DetailsScreen from "./Screens/DetailsScreen";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import UserSignupScreen from "./Screens/UserSignupScreen";
import HandymanSignupScreen from "./Screens/HandymanSignupScreen";
import RegisterSelection from "./Screens/RegisterSelection";
import ElectricianScreen from "./Screens/ElectricianScreen";
import PlumberScreen from "./Screens/PlumberScreen";
import PainterScreen from "./Screens/PainterScreen";
import GardenerScreen from "./Screens/GardenerScreen";
import CarpenterScreen from "./Screens/CarpenterScreen";
import CleanerScreen from "./Screens/CleanerScreen";

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
    Electrician: {
      screen: ElectricianScreen,
      navigationOptions: () => ({
        header: null
      })
    },   
    Plumber: {
      screen: PlumberScreen,
      navigationOptions: () => ({
        header: null
      })
    },
    Painter: {
      screen: PainterScreen,
      navigationOptions: () => ({
        header: null
      })
    }, 
    Gardener: {
      screen: GardenerScreen,
      navigationOptions: () => ({
        header: null
      })
    },
    Carpenter: {
      screen: CarpenterScreen,
      navigationOptions: () => ({
        header: null
      })
    },
    Cleaner: {
      screen: CleanerScreen,
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
