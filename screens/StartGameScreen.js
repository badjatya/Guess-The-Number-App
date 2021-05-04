import React from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";

import Card from "../components/Card";

const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start Game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Enter a Number</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <View>
            <Button
              style={StyleSheet.button}
              title="Reset"
              color="#c717fc"
              onPress={() => {}}
            />
          </View>
          <View>
            <Button
              style={StyleSheet.button}
              title="Confirm"
              color="#f7287b"
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
