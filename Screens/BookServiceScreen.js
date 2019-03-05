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

export default class BookServiceScreen extends React.Component {
    static navigationOptions = {
        title: "BookService"
    };

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <ImageBackground
                    source={require("../assets/background/bg2.png")}
                    style={styles.container}
                >
                    <View style={styles.container}>
                        <Text style={styles.title}>DETAILS</Text>

                        <View style={styles.Signupcontainer}>

                            <TextInput
                                placeholder="Address"
                                placeholderTextColor="rgba(255,255,255,0.7)"
                                multiline={true}
                                numberOfLines={4}
                                returnKeyType="next"
                                onSubmitEditing={() => this.PhoneInput.focus()}
                                autoCorrect={false}
                                style={styles.input}
                            />
                            <TextInput
                                placeholder="Phone Number"
                                placeholderTextColor="rgba(255,255,255,0.7)"
                                returnKeyType="go"
                                style={styles.input}
                                onSubmitEditing={() => this.Service.focus()}
                                ref={input => (this.PhoneInput = input)}
                            />


                            <TextInput
                                placeholder="Service Selected"
                                placeholderTextColor="rgba(255,255,255,0.7)"
                                returnKeyType="go"
                                style={styles.input}
                                ref={input => (this.Service = input)}
                            />

                            <TouchableOpacity
                                style={styles.buttonContainer}
                                onPress={() => this.props.navigation.navigate("Home")}
                            >
                                <Text style={styles.buttonText}>Book</Text>
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
        height: "100%",
        justifyContent: 'center',
    },
    title: {
        color: "#f5a623",
        fontWeight: "bold",
        textAlign: "center",
        justifyContent: 'center',
        padding: 10,
        fontSize: 50
    },
    Signupcontainer: {
        padding: 20
    },

    input: {
        height: 40,
        backgroundColor: "rgba(255,255,255,0.2)",
        marginBottom: 10,
        color: "#FFF",
        paddingHorizontal: 10,
        borderRadius: 5,
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
        fontWeight: "500",
        fontSize: 20
    }
});
