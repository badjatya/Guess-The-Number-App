import React from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";

const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start Game!</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Enter a Number</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <Button title="Reset" onPress={() => {}} />
          <Button title="Confirm" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {},
  inputContainer: {},
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default StartGameScreen;
