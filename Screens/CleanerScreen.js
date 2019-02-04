import React from "react";
import {
  StyleSheet,  
  View,
  ImageBackground,
  Text
} from "react-native";
import CheckBox from 'react-native-check-box';

export default class CleaningScreen extends React.Component{
    constructor() {
        super();
        this.state={
            isChecked1: false,
            isChecked2: false,
            isChecked3: false,
            isChecked4: false,
            isChecked5: false,
        };
    }
    
    render(){
        return(
            <ImageBackground
               source={require("../assets/background/bgwatermark.jpg")}
               style={styles.container}
            >
                <View style={styles.container}>
                <Text style={styles.title}>Cleaner</Text>
                <View style={styles.checkContainer}>
                    <CheckBox style={styles.checkboxstyle}
                        onClick={()=>{
                            this.setState({
                                isChecked1:!this.state.isChecked1
                            })
                          }}
                          isChecked={this.state.isChecked1}
                          leftTextStyle={styles.checkboxtext}
                        leftText={"Complete Home Cleaning"}
                    />  
                   <CheckBox style={styles.checkboxstyle}
                        onClick={()=>{
                            this.setState({
                                isChecked2:!this.state.isChecked2
                            })
                          }}
                          isChecked={this.state.isChecked2}
                          leftTextStyle={styles.checkboxtext}
                         leftText={"Plot Cleaning"}
                    />  
                    <CheckBox style={styles.checkboxstyle}
                        onClick={()=>{
                            this.setState({
                                isChecked3:!this.state.isChecked3
                            })
                          }}
                          isChecked={this.state.isChecked3}
                          leftTextStyle={styles.checkboxtext}
                        leftText={"Office Cleaning"}
                    /> 
                    <CheckBox style={styles.checkboxstyle}
                        onClick={()=>{
                            this.setState({
                                isChecked4:!this.state.isChecked4
                            })
                          }}
                          isChecked={this.state.isChecked4}
                          leftTextStyle={styles.checkboxtext}
                        leftText={"Septic Tank Cleaning"}
                    /> 
                    <CheckBox style={styles.checkboxstyle}
                        onClick={()=>{
                            this.setState({
                                isChecked5:!this.state.isChecked5
                            })
                          }}
                          isChecked={this.state.isChecked5}
                          leftTextStyle={styles.checkboxtext}
                        leftText={"Others"}
                    />
                </View>
            </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        flex:1,
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        color: '#ffffff',
        marginTop: 20,
        fontWeight: 'bold',
        padding: 20
    },
    checkboxstyle:{
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