import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import CustomButton from "../components/CustomButton";
import Colors from "../constants/Colors";

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      <Text>Number of rounds: {props.roundsNumber}</Text>
      <Text>Number was: {props.userNumber}</Text>
      <CustomButton style={styles.button} onPress={props.onRestart}>
        NEW GAME
      </CustomButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: Colors.primary,
  },
});

export default GameOver;
