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
import ToggleFunction from "./src/toggle_function/index";
import Internet from "./src/internet_connectivity/index";
import BackHandler from "./src/back_handler/index";
import SpinnerOverlay from "./src/spinner_overlay/index";
import PuzzleTextBox from "./src/puzzle_text_box/index";
import SweetAlert from "./src/sweet_alert";
import AsyncStorage from "./src/AsyncStorage";
import ImageView from "./src/expanding_image_view";

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
  },
  ToggleFunction: {
    screen: ToggleFunction
  },
  Internet: {
    screen: Internet
  },
  BackHandler: {
    screen: BackHandler
  },
  SpinnerOverlay: {
    screen: SpinnerOverlay
  },
  PuzzleTextBox: {
    screen: PuzzleTextBox
  },
  SweetAlert: {
    screen: SweetAlert
  },
  AsyncStorage: {
    screen: AsyncStorage
  },
  ImageView: {
    screen: ImageView
  }
});
