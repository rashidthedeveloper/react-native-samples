import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import TextBox from "./component";

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: [],
      button: "M",
      word: "MALE",
      data: [],
      arrayPressed: []
    };
  }

  componentDidMount() {
    let arrayData = [];
    for (let i = 0; i < this.state.word.length; i++) {
      arrayData.push(this.state.word.charAt[i]);
    }
    this.setState({
      data: arrayData
    });
  }

  createUI() {
    return this.state.data.map((el, i) => (
      <View key={i}>
        <TextBox
          // onChangeText={text => this.setState({ text })}
          value={this.state.text[i]}
        />
      </View>
    ));
  }

  buttonPress(letter) {
    this.state.arrayPressed.push(letter);
    this.setState({
      text: this.state.arrayPressed
    });
  }

  render() {
    // let textviews = [];
    let buttons = [];
    // for (let i = 0; i < this.state.word.length; i++) {
    //   textviews.push(
    //     <View key={i}>
    //       <TextBox
    //         // onChangeText={text => this.setState({ text })}
    //         value={this.state.text}
    //       />
    //     </View>
    //   );
    // }
    for (let i = 0; i < this.state.word.length + 5; i++) {
      buttons.push(
        <View key={i} style={styles.button}>
          <Button
            onPress={() => this.buttonPress(this.state.button)}
            style={styles.button}
            title={this.state.button}
            color="black"
          />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        {/* <View style={{ flexDirection: "row" }}>{textviews}</View> */}
        <View style={{ flexDirection: "row" }}>{this.createUI()}</View>
        <View style={{ flexDirection: "row" }}>{buttons}</View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    margin: 5
  }
});
