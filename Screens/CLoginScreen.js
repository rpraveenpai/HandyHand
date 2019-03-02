import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity
} from "react-native";

export default class CLoginScreen extends React.Component {
  static navigationOptions = {
    title: "CLogin"
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <ImageBackground
          source={require("../assets/background/bg2.png")}
          style={styles.container}
        >
          <View style={styles.container}>
            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={require("../assets/icons/logo.png")}
              />
            </View>

            <View style={styles.formContainer}>
              <View style={styles.Logincontainer}>
                <TextInput
                  placeholder="email"
                  placeholderTextColor="rgba(255,255,255,0.7)"
                  returnKeyType="next"
                  onSubmitEditing={() => this.passwordInput.focus()}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={styles.input}
                />

                <TextInput
                  placeholder="password"
                  placeholderTextColor="rgba(255,255,255,0.7)"
                  returnKeyType="go"
                  secureTextEntry
                  style={styles.input}
                  ref={input => (this.passwordInput = input)}
                />

                <TouchableOpacity
                  style={styles.buttonContainer}
                  onPress={() => this.props.navigation.navigate("Home")}
                >
                  <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.buttonContainer}
                  onPress={() => this.props.navigation.navigate("UserSignup")}
                >
                  <Text style={styles.buttonText}>SIGNUP</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  Logincontainer: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: "rgba(255,255,255,0.2)",
    marginBottom: 10,
    color: "#FFF",
    paddingHorizontal: 10,
    borderRadius: 5
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center"
  },
  logo: {
    width: "100%",
    height: "50%",
    resizeMode: "contain"
  },
  title: {
    color: "#FFF",
    marginTop: 10,
    width: 180,
    textAlign: "center",
    opacity: 0.9
  },
  buttonContainer: {
    backgroundColor: "#f5a623",
    paddingVertical: 15,
    borderRadius: 5,
    marginBottom: 10
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "500"
  }
});
