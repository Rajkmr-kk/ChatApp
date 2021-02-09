import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class LoginScreen extends Component {
  state = {
    name: "",
  };

  continue = () => {
    this.props.navigation.navigate("chat", { name: this.state.name });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.circle} />
        <View>
          <Image
            source={require("../assets/chatDraw.png")}
            style={styles.imageContainer}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.header}>Username</Text>
          <TextInput
            style={styles.inputContainer}
            placeholder={"Enter your username"}
            onChangeText={(name) => {
              this.setState({ name });
            }}
            value={this.state.name}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.continue} onPress={this.continue}>
              <Ionicons
                name={"md-arrow-round-forward"}
                size={24}
                color="#fff"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fc3c65",
    marginTop: 10,
  },
  circle: {
    width: 380,
    height: 400,
    borderRadius: 200,
    backgroundColor: "#fff",
    position: "absolute",
    left: 5,
    top: -10,
    marginTop: 100,
    bottom: 60,
  },
  imageContainer: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 120,
  },
  textContainer: {
    marginHorizontal: 32,
  },
  header: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#514e5a",
    marginTop: 8,
  },
  inputContainer: {
    marginTop: 20,
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#bab7c3",
    borderRadius: 30,
    paddingHorizontal: 16,
    color: "#514e5a",
    fontWeight: "100",
  },
  buttonContainer: {
    alignItems: "flex-end",
    marginTop: 10,
    marginRight: 10,
  },
  continue: {
    height: 70,
    width: 70,
    borderRadius: 35,
    backgroundColor: "#fc3c65",
    alignItems: "center",
    justifyContent: "center",
  },
});
