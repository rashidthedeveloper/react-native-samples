import React, { Component } from 'react';
import { View, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View>
        <QRCode
        value="http://awesome.link.qr"
      />
      </View>
    );
  }
}
