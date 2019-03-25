import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image
} from "react-native";


export default class SelectionScreen extends React.Component {
  static navigationOptions = {
    title: "Selection"
  };
  render() {
    return ( 
      <ImageBackground
        source={require("../assets/background/bg2.png")}
        style={styles.container}
      >
        <View style={styles.container}>
          <View style={styles.menuContainer}>
            <View style={styles.menuItem}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("CLogin")}
              >
                <Image
                  source={require("../assets/icons/user.png")}
                  style={styles.image}
                />
              </TouchableOpacity>
              <Text style={styles.buttonText}>Customer</Text>
            </View>
            <View style={styles.menuItem}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("HLogin")}
              >
                <Image
                  source={require("../assets/icons/handyman.png")}
                  style={styles.image}
                />
              </TouchableOpacity>
              <Text style={styles.buttonText}>Handyman</Text>
            </View>
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
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 20
  },
  menuContainer: {
    height: "40%",
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent : 'space-between',
    padding: 20
  },
  menuItem: {
    width: "33.333333%",
    height: "50%",
  },
  image: {
    width: "100%",
    height: "100%",
    opacity: 0.8,
    borderColor: "#fff",
    borderWidth: 3,
    borderRadius: 90
  },
});
