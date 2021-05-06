import React from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";

import Card from "../components/Card";
import Colors from "../constants/Colors";
import Input from "../components/Input";

const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start Game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Enter a Number</Text>
        <Input style={styles.inputField} blurOnSubmit />
        <View style={styles.buttonContainer}>
          <View>
            <Button
              style={StyleSheet.button}
              title="Reset"
              color={Colors.secondary}
              onPress={() => {}}
            />
          </View>
          <View>
            <Button
              style={StyleSheet.button}
              title="Confirm"
              color={Colors.primary}
              onPress={() => {}}
            />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  inputField: {
    width: 50,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
    flex: 1,
  },
});

export default StartGameScreen;
