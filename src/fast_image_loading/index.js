import React, { Component } from "react";
import { View, Text, Dimensions } from "react-native";
import FastImage from "react-native-fast-image";
const dimensions = Dimensions.get("window");
const imageHeight = Math.round((dimensions.width * 9) / 16);
const imageWidth = Dimensions.get("window");
export default class componentName extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {}

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
        <FastImage
          style={{ aspectRatio: 3 / 2 }}
          source={{
            uri:
              "https://cdn.pixabay.com/photo/2017/10/06/23/19/background-2824974_960_720.jpg",
            headers: { Authorization: "someAuthToken" },
            priority: FastImage.priority.normal
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
    );
  }
}
