import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import BookServiceScreen from "./Screens/BookServiceScreen";
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
        headerTintColor: '#f5a623',
        headerStyle: {
          backgroundColor: '#2a363b'
        },        
      })    
    },
    Plumber: {
      screen: PlumberScreen,
      navigationOptions: () => ({
        headerTintColor: '#f5a623',
        headerStyle: {
          backgroundColor: '#2a363b'
        },        
      })      
    },
    Painter: {
      screen: PainterScreen,
      navigationOptions: () => ({
        headerTintColor: '#f5a623',
        headerStyle: {
          backgroundColor: '#2a363b'
        },        
      })
    },
    Gardener: {
      screen: GardenerScreen,
      navigationOptions: () => ({
        headerTintColor: '#f5a623',
        headerStyle: {
          backgroundColor: '#2a363b'
        },        
      })
    },
    Carpenter: {
      screen: CarpenterScreen,
      navigationOptions: () => ({
        headerTintColor: '#f5a623',
        headerStyle: {
          backgroundColor: '#2a363b'
        },        
      })
    },
    Cleaner: {
      screen: CleanerScreen,
      navigationOptions: () => ({
        headerTintColor: '#f5a623',
        headerStyle: {
          backgroundColor: '#2a363b'
        },        
      })
    },
    BookService: {
      screen: BookServiceScreen,
      navigationOptions: () => ({
        headerTintColor: '#f5a623',
        headerStyle: {
          backgroundColor: '#2a363b'
        },        
      })     
    },
  },
  {
    initialRouteName: "Login"
  }
);

const AppContainer = createAppContainer(AppNavigator);
