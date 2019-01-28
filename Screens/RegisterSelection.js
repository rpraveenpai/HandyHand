import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground
} from "react-native";

export default class RegisterSelection extends React.Component {
  static navigationOptions = {
    title: "Register"
  };
  render() {
    return (
      <ImageBackground
        source={require("../assets/background/bg2.png")}
        style={styles.container}
      >
        <View style={styles.container}>
        <View  style={styles.menuContainer}>
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.props.navigation.navigate("UserSignup")}
          >
            <Text style={styles.buttonText}>Register as a User</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.props.navigation.navigate("HandymanSignup")}
          >
            <Text style={styles.buttonText}>Register as a Handyman</Text>
          </TouchableOpacity>
        </View>
          
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",    
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 50
  },
  buttonContainer: {
    backgroundColor: "#f5a623",
    paddingVertical: 20,
    borderRadius: 5,
    marginBottom: 10
  },
  menuContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    flex:1
  }
});
