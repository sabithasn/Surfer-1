import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from "react-native";

export default class SurferScreen extends Component {


    render() {
        return (
            <View style={styles.container}>

              
                <Text>Surfer Screen</Text>
              
             
  
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeCard: {
        flex: 0.12,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        marginLeft: 80,
        marginRight: 80,
        borderRadius: 100,
        marginTop: 250
    },
    headerBar: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center"
    },
    headerText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "gold",
  
    }
   
});
