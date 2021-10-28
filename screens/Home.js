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

export default class HomeScreen extends Component {


    render() {
        return (
            <View style={styles.container}>

              <TouchableOpacity style={styles.routeCard} onPress={() =>
                  this.props.navigation.navigate("Surfer")
              }>
                <Text>Start</Text>
              
              </TouchableOpacity>
  
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
