import React, { Component } from "react";
import { View, Text, TextInput, AsyncStorage, Button } from "react-native";

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataEntered: "",
      dataRetrieved: ""
    };
  }

  saveData = value => {
    try {
      AsyncStorage.setItem("data", value);
    } catch (error) {
      console.log("Oops!", error.toString());
    }
  };

  retrieveData = () => {
    AsyncStorage.getItem("data").then(values => {
      console.log("value", values);
      if (values !== null) {
        this.setState({
          dataRetrieved: values
        });
      }
    });
  };

  render() {
    return (
      <View>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={dataEntered => this.setState({ dataEntered })}
          value={this.state.dataEntered}
        />
        <Button title="Add Data" onPress={() => this.saveData()} />
        <Text style={{ color: "red" }}>{this.state.dataRetrieved}</Text>
        <Button title="Retrieve Data" onPress={() => this.retrieveData()} />
      </View>
    );
  }
}
