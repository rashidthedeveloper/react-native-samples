import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export default class main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.navigate("DownloadImage")}
          title="Image / File Download Android"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={() => this.props.navigation.navigate("ShareImage")}
          title="Image / File Share Android"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={() => this.props.navigation.navigate("FastImage")}
          title="Fast Image"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={() => this.props.navigation.navigate("WebImage")}
          title="Web Image"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={() => this.props.navigation.navigate("ToggleFunction")}
          title="Toggle Function"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={() => this.props.navigation.navigate("Internet")}
          title="Internet Connectivity"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={() => this.props.navigation.navigate("BackHandler")}
          title="Exit App"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={() => this.props.navigation.navigate("SpinnerOverlay")}
          title="Spinner Overlay"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={() => this.props.navigation.navigate("PuzzleTextBox")}
          title="Puzzle TextBox"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={() => this.props.navigation.navigate("SweetAlert")}
          title="Sweet Alert"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={() => this.props.navigation.navigate("AsyncStorage")}
          title="AsyncStorage"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={() => this.props.navigation.navigate("ImageView")}
          title="Expandable ImageView"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={() => this.props.navigation.navigate("QrCode")}
          title="QR Code Generator"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}
