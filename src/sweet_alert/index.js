import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import SweetAlert from "react-native-sweet-alert";

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  showAlert = () => {
    SweetAlert.showAlert(
      {
        title: "",
        subTitle: "",
        confirmButtonTitle: "OK",
        confirmButtonColor: "#000",
        otherButtonTitle: "Cancel",
        otherButtonColor: "#dedede",
        style: "success",
        cancellable: true
      },
      callback => console.log(acceptButtonCallback)
    );
  };

  render() {
    return (
      <View>
        <Button
          onPress={() =>
            SweetAlert.showAlert(
              {
                title: "",
                subTitle: "",
                confirmButtonTitle: "OK",
                confirmButtonColor: "#000",
                otherButtonTitle: "Cancel",
                otherButtonColor: "#dedede",
                style: "success",
                cancellable: true
              },
              callback => console.log("acceptButtonCallback")
            )
          }
          title="Press Here"
        />
      </View>
    );
  }
}
