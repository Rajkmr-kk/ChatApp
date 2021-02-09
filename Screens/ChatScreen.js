import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { TypingAnimation } from "react-native-typing-animation";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import fireBase from "../components/fireBase";

export default class ChatScreen extends Component {
  state = {
    messages: [],
  };

  get user() {
    return {
      _id: fireBase.uid,
      name: this.props.navigation.state.params.name,
    };
  }

  componentDidMount() {
    fireBase.get((message) =>
      this.setState((previous) => ({
        messages: GiftedChat.append(previous.messages, message),
      }))
    );
  }

  componentWillUnmount() {
    fireBase.off();
  }

  render() {
    const chat = (
      <GiftedChat
        messages={this.state.messages}
        onSend={fireBase.send}
        user={this.user}
      />
    );

    if (Platform.OS === "android")
      return (
        <KeyboardAvoidingView
          style={{ flex: 1, marginTop: 30 }}
          behavior="padding"
          keyboardVerticalOffset={1}
          enabled
        >
          {chat}
        </KeyboardAvoidingView>
      );
    return <SafeAreaView style={{ flex: 1 }}>{chat}</SafeAreaView>;
  }
}
