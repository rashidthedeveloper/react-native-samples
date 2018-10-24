/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";
import main from "./src/main";
import DownloadImage from "./src/image_download_android/index";
import ShareImage from "./src/image_share_android/index";
import FastImage from "./src/fast_image_loading/index";
import WebImage from "./src/web_image_loading/index";

export default createStackNavigator({
  Home: {
    screen: main
  },
  DownloadImage: {
    screen: DownloadImage
  },
  ShareImage: {
    screen: ShareImage
  },
  FastImage: {
    screen: FastImage
  },
  WebImage: {
    screen: WebImage
  }
});
