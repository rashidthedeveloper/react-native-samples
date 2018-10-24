import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import WebImage from "react-native-web-image";

export default class App extends Component {
  render() {
    const imageUri =
      "https://placeholdit.imgix.net/~text?txtsize=33&txt=200x150&w=200&h=150";
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Sample image</Text>
        <View style={styles.imgContainer}>
          <WebImage style={styles.img} source={{ uri: imageUri }} />
        </View>
      </View>
    );
  }
}

const white = "#FFFFFF";
const blue = "rgb(0,0,255)";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: white
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  img: {
    flex: 1
  },
  imgContainer: {
    flexDirection: "row",
    flex: 1,
    borderWidth: 1,
    borderColor: blue
  }
});
