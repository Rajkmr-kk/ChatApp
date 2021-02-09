import React, { Component } from "react";
import { View, Text } from "react-native";
import firebase from "firebase";

class fireBase {
  constructor(props) {
    this.init();
    this.checkAuth();
  }

  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyCR-1dUEZL8fHP2o_WerECj1HEJBw1Lb2Y",
        authDomain: "chatapp-b76a3.firebaseapp.com",
        databaseURL: "https://chatapp-b76a3.firebaseio.com",
        projectId: "chatapp-b76a3",
        storageBucket: "chatapp-b76a3.appspot.com",
        messagingSenderId: "460369237880",
        appId: "1:460369237880:web:b82a985354bff3a0fc1a8d",
        measurementId: "G-0L0BNLC6SY",
      });
    }
  };

  checkAuth = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        firebase.auth().signInAnonymously();
      }
    });
  };
  send = (messages) => {
    messages.forEach((item) => {
      const message = {
        text: item.text,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        user: item.user,
      };
      this.db.push(message);
    });
  };

  parse = (message) => {
    const { user, text, timestamp } = message.val();
    const { key: _id } = message;
    const createdAt = new Date(timestamp);

    return {
      _id,
      createdAt,
      text,
      user,
    };
  };

  get = (callback) => {
    this.db.on("child_added", (snapshot) => callback(this.parse(snapshot)));
  };

  off() {
    this.db.off();
  }

  get db() {
    return firebase.database().ref("messages");
  }

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }
}

export default new fireBase();
