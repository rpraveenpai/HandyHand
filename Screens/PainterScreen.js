import React from "react";
import {
    StyleSheet,
    View,
    ImageBackground,
    Text,
    TouchableOpacity,
    Picker,
} from "react-native";


export default class PainterScreen extends React.Component {
    constructor() {
        super();

        this.state = {
            PainterWork: 'General Painter Work'
        };
    }


    render() {
        return (
            <ImageBackground
                source={require("../assets/background/bg2.png")}
                style={styles.container}
            >
                <View style={styles.container}>
                    <Text style={styles.title}>Painter</Text>
                    <View style={styles.PickerContainer}>
                        <Picker
                            selectedValue={this.state.PainterWork}
                            style={styles.pickerstyle}
                            onValueChange={(itemValue) =>
                                this.setState({ PainterWork: itemValue })
                            }>
                            <Picker.Item label="General Painting Work" value="General Painting Work" />
                            <Picker.Item label="Others" value="Others" />
                        </Picker>
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
        padding: 30
    },
    PickerContainer: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    pickerstyle: {
        height: 50,
        width: "100%",
        color: "#f5a623",
    }

})