import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true
    };
  }

  ToggleFunction = () => {
    this.setState(state => ({
      toggle: !state.toggle
    }));
  };

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.ToggleFunction()}>
          <Text>
            {" "}
            {this.state.toggle
              ? "Add to Favorites"
              : "Remove from Favorites"}{" "}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
