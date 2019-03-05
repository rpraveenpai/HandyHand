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

export default class UserSignupScreen extends React.Component {
  static navigationOptions = {
    title: "UserSignup"
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <ImageBackground
          source={require("../assets/background/bg2.png")}
          style={styles.container}
        >
          <View style={styles.container}>
            <View style={styles.Signupcontainer}>
            <Text style={styles.title}>REGISTER</Text>
              <TextInput
                placeholder="Username"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="next"
                onSubmitEditing={() => this.emailInput.focus()}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
              />

              <TextInput
                placeholder="Email"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="next"
                ref={input => (this.emailInput = input)}
                onSubmitEditing={() => this.passwordInput.focus()}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
              />

              <TextInput
                placeholder="Password"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="next"
                secureTextEntry
                style={styles.input}
                ref={input => (this.passwordInput = input)}
                onSubmitEditing={() => this.PhoneInput.focus()}
              />

              <TextInput
                placeholder="Phone Number"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="go"
                style={styles.input}
                ref={input => (this.PhoneInput = input)}
              />

              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => this.props.navigation.navigate("Home")}
              >
                <Text style={styles.buttonText}>SIGNUP</Text>
              </TouchableOpacity>
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
  Signupcontainer: {
    padding: 50,
    marginTop:50,
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
    color: "#f5a623",
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    fontSize: 20
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
