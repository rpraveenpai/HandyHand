import React from "react";
import {
    StyleSheet,
    View,
    ImageBackground,
    Text,
    TouchableOpacity
} from "react-native";
import CheckBox from 'react-native-check-box';

export default class PainterScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            isChecked1: false,
            isChecked2: false,
        };
    }

    render() {
        return (
            <ImageBackground
                source={require("../assets/background/bgwatermark.jpg")}
                style={styles.container}
            >
                <View style={styles.container}>
                    <Text style={styles.title}>Painter</Text>
                    <View style={styles.checkContainer}>
                        <CheckBox style={styles.checkboxstyle}
                            onClick={() => {
                                this.setState({
                                    isChecked1: !this.state.isChecked1
                                })
                            }}
                            isChecked={this.state.isChecked1}
                            leftTextStyle={styles.checkboxtext}
                            leftText={"General Painting Work"}
                        />
                        <CheckBox style={styles.checkboxstyle}
                            onClick={() => {
                                this.setState({
                                    isChecked2: !this.state.isChecked2
                                })
                            }}
                            isChecked={this.state.isChecked2}
                            leftTextStyle={styles.checkboxtext}
                            leftText={"Other"}
                        />
                    </View>
                    <View style={styles.touchcontainer}>
                <TouchableOpacity
                  style={styles.buttonContainer}
                  onPress={() => this.props.navigation.navigate("Home")}
                >
                  <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
                </View>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
    },
    touchcontainer: {
        padding: 20
    },
    buttonContainer: {
        backgroundColor: "#f5a623",
        paddingVertical: 15,
        borderRadius: 5,
        marginBottom: 10,
    },
    buttonText: {
        textAlign: "center",
        color: "#FFFFFF",
        fontWeight: "500"
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        color: '#ffffff',
        marginTop: 20,
        fontWeight: 'bold',
        padding: 20
    },
    checkboxstyle: {
        padding: 20,
    },
    checkContainer: {
        flexDirection: "column",
    },
    checkboxtext: {
        color: '#ffffff',
        fontWeight: 'bold'
    }
})