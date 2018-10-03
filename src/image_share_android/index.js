import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import Share from "react-native-share";

export default class ImageShare extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  shareFile = () => {
    const shareOptions = {
      title: "React Native",
      message: "Hola mundo",
      url:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAYFBMVEUAAAAAQIAAWpwAX5kAX5gAX5gAX5gAXJwAXpgAWZ8AX5gAXaIAX5gAXpkAVaoAX5gAXJsAX5gAX5gAYJkAYJkAXpoAX5gAX5gAX5kAXpcAX5kAX5gAX5gAX5YAXpoAYJijtTrqAAAAIHRSTlMABFis4vv/JL0o4QvSegbnQPx8UHWwj4OUgo7Px061qCrcMv8AAAB0SURBVEjH7dK3DoAwDEVRqum9BwL//5dIscQEEjFiCPhubziTbVkc98dsx/V8UGnbIIQjXRvFQMZJCnScAR3nxQNcIqrqRqWHW8Qd6cY94oGER8STMVioZsQLLnEXw1mMr5OqFdGGS378wxgzZvwO5jiz2wFnjxABOufdfQAAAABJRU5ErkJggg==",
      subject: "Share Link"
    };
    Share.open(shareOptions);
  };

  render() {
    return (
      <View>
        <Text> File/Image Share </Text>
        <Button onPress={() => this.shareFile()} title="SHARE" />
      </View>
    );
  }
}
