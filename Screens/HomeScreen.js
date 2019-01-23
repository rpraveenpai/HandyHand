import React from "react";
import {
  AppRegistry,
  View, 
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import MenuItem from './MenuItem';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
		title: 'Home',
    };
    constructor(props){
      super(props);
    } 


  render() {
    return (
      <ImageBackground
        source={require('../assets/bg.jpg')}
        style={styles.container}>      
            

        <View style={styles.top}>
          <Text style={styles.header}>HandyHand</Text>
        </View>

        <View style={styles.menuContainer}>

          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Details')}>  
            <MenuItem itemImage={require('../assets/electrician.png')}/>
          </TouchableOpacity>

          <MenuItem itemImage={require('../assets/gardener.png')}/>
          <MenuItem itemImage={require('../assets/plumber.png')}/>
          <MenuItem itemImage={require('../assets/cleaner.png')}/>
          <MenuItem itemImage={require('../assets/carpenter.png')}/>
          <MenuItem itemImage={require('../assets/painter.png')}/>
        </View>


      </ImageBackground>

    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:  1,
    width:  '100%',
    height: '100%',
  },
  top:{
    height:'50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    opacity: 0.8,
    borderColor: '#fff',
    borderWidth: 3,
    borderRadius: 90,
},
  header:{
    color:'#fff',
    fontSize: 28,
    borderColor: '#fff',
    borderWidth: 2,
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: 'rgba(255,255,255, .1)'
  },
  menuContainer:{
    height: '40%',
    flexDirection: 'column',
    flexWrap:'wrap',
  }
});