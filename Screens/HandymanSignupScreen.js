import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Picker
} from "react-native";

export default class HandymanSignupScreen extends React.Component {
  static navigationOptions = {
    title: "HandymanSignup"
  };

  constructor(props) {
    super(props);
    this.state = { service: "" };
    this.state = { yearsofexp: "" };
  }

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
                placeholder="Name"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="next"
                onSubmitEditing={() => this.userInput.focus()}
                autoCorrect={false}
                style={styles.input}
              />

              <TextInput
                placeholder="Username"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="next"
                ref={input => (this.userInput = input)}
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
              <Text style={styles.text}>Type of Service:</Text>
              <Picker
                selectedValue={this.state.service}
                style={styles.pickerText}
                onValueChange={itemValue =>
                  this.setState({ service: itemValue })
                }
              >
                <Picker.Item label="Electrician" value="1" />
                <Picker.Item label="Plumber" value="2"/>
                <Picker.Item label="Gardener" value="3"/>
                <Picker.Item label="Cleaner" value="4"/>
                <Picker.Item label="Painter" value="5"/>
                <Picker.Item label="Carpenter" value="6" />
              </Picker>
              <Text style={styles.text}>Years of Experience:</Text>
              <Picker
                selectedValue={this.state.yearsofexp}
                style={styles.pickerText}
                onValueChange={itemValue =>
                  this.setState({ yearsofexp: itemValue })
                }
              >
                <Picker.Item label="0-5" value="1" />
                <Picker.Item label="0-10" value="2" />
                <Picker.Item label="More than 10" value="3" />
              </Picker>

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
    marginTop: 60
  },
  input: {
    height: 40,
    backgroundColor: "rgba(255,255,255,0.2)",
    marginBottom: 10,
    color: "#FFF",
    paddingHorizontal: 10,
    borderRadius: 5
  },
  logo: {
    width: "100%",
    height: "50%",
    resizeMode: "contain"
  },
  text: {
    color: "#FFF",
    fontWeight: "bold"
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
    fontWeight: "700"
  },
  pickerText: {
    height: 50,
    width: "100%",
    color: "#FFF"
  },
  title: {
    color: "#f5a623",
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    fontSize: 20
  }
});
