import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "./Screens/LoginScreen";
import ChatScreen from "./Screens/ChatScreen";

const AppNavigator = createStackNavigator(
  {
    login: LoginScreen,
    chat: ChatScreen,
  },
  {
    headerMode: "none",
  }
);

export default createAppContainer(AppNavigator);
