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

          <View style={styles.menuItem}>
            <TouchableOpacity           
            onPress={()=>this.props.navigation.navigate('Details')}>  
              <Image 
                source={require('../assets/electrician.png')}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>
          
          <View style={styles.menuItem}>
            <TouchableOpacity           
            onPress={()=>this.props.navigation.navigate('Details')}>  
              <Image 
                source={require('../assets/gardener.png')}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.menuItem}>
            <TouchableOpacity           
            onPress={()=>this.props.navigation.navigate('Details')}>  
              <Image 
                source={require('../assets/plumber.png')}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.menuItem}>
            <TouchableOpacity           
            onPress={()=>this.props.navigation.navigate('Details')}>  
              <Image 
                source={require('../assets/cleaner.png')}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.menuItem}>
            <TouchableOpacity           
            onPress={()=>this.props.navigation.navigate('Details')}>  
              <Image 
                source={require('../assets/carpenter.png')}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.menuItem}>
            <TouchableOpacity           
            onPress={()=>this.props.navigation.navigate('Details')}>  
              <Image 
                source={require('../assets/painter.png')}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>

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
  },
  menuItem: {
    width: '33.333333%',
    height: '50%',
    padding: 20,
},

});