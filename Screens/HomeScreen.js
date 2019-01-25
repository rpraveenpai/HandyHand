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
  NetInfo,  
  Alert,
  BackHandler
} from "react-native";



export default class HomeScreen extends React.Component {
  static navigationOptions = {
		title: 'Home',
    };
    constructor(props){
      super(props);
      this.state={isConnected: false};
    } 
    componentDidMount(){
      BackHandler.addEventListener('hardwareBackPress', this.backPressed);
      NetInfo.isConnected.addEventListener('connectionChange',this.handleConnectivityChange);
      
    }
    
    componentWillUnmount(){
      NetInfo.isConnected.removeEventListener('connectionChange',this.handleConnectivityChange);
      BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
    }
    
    handleConnectivityChange = (isConnected) => {
      this.setState({isConnected});     
      if(!this.state.isConnected){
          this.backPressed();
      }
    }
    backPressed = () => {
      Alert.alert(
      'No Internet',
      'Internet Connectivity is needed',
      [       
       {text: 'Okay', onPress: () => BackHandler.exitApp()},
     ],
    { cancelable: false });
    return true;
}
    
  render() {
    return (
      <ImageBackground
        source={require('../assets/background/bg.jpg')}
        style={styles.container}>      

        <View style={styles.top}>          
          <Image 
          source={require('../assets/icons/logo.png')}
          style={styles.logo}
          />          
        </View>

        <View style={styles.menuContainer}>

          <View style={styles.menuItem}>
            <TouchableOpacity           
            onPress={()=>this.props.navigation.navigate('Details')}>  
              <Image 
                source={require('../assets/icons/electrician.png')}
                style={styles.image}
              />             
            </TouchableOpacity>
              <Text style={styles.menuText}>Electrician</Text>
          </View>
          
          <View style={styles.menuItem}>
            <TouchableOpacity           
            onPress={()=>this.props.navigation.navigate('Details')}>  
              <Image 
                source={require('../assets/icons/gardener.png')}
                style={styles.image}
              />
            </TouchableOpacity>
            <Text style={styles.menuText}>Gardener</Text>
          </View>

          <View style={styles.menuItem}>
            <TouchableOpacity           
            onPress={()=>this.props.navigation.navigate('Details')}>  
              <Image 
                source={require('../assets/icons/plumber.png')}
                style={styles.image}
              />
            </TouchableOpacity>
            <Text style={styles.menuText}>Plumber</Text>
          </View>

          <View style={styles.menuItem}>
            <TouchableOpacity           
            onPress={()=>this.props.navigation.navigate('Details')}>  
              <Image 
                source={require('../assets/icons/cleaner.png')}
                style={styles.image}
              />
            </TouchableOpacity>
            <Text style={styles.menuText}>Cleaner</Text>
          </View>

          <View style={styles.menuItem}>
            <TouchableOpacity           
            onPress={()=>this.props.navigation.navigate('Details')}>  
              <Image 
                source={require('../assets/icons/carpenter.png')}
                style={styles.image}
              />
            </TouchableOpacity>
            <Text style={styles.menuText}>Carpenter</Text>
          </View>

          <View style={styles.menuItem}>
            <TouchableOpacity           
            onPress={()=>this.props.navigation.navigate('Details')}>  
              <Image 
                source={require('../assets/icons/painter.png')}
                style={styles.image}
              />
            </TouchableOpacity>
            <Text style={styles.menuText}>Painter</Text>
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
  menuText:{
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',   
    textAlign: 'center'    
  },
  logo: {     
    flex: 1,
    height: '100%',
    width: '100%',
    resizeMode:"cover"        
  },
  

});