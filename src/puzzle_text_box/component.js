import React, { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";

export default class componentName extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.text}
          editable={false}
          value={this.props.value}
          onSubmitEditing={this.props.onSubmitEditing}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    padding: 5,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black"
  },
  text: {
    fontSize: 15,
    color: "black"
  }
});
