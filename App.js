import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import { Provider } from "react-redux";
import store from "./app/redux";
import Navigation from "./app/components/navigation"
import {
  NavigationContainer
} from "@react-navigation/native";
import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARSceneNavigator,
} from '@viro-community/react-viro';

export default () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
  </Provider>


  );
};

var styles = StyleSheet.create({
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
