import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import CustomButton from "../components/CustomButton";
import Colors from "../constants/Colors";
import Card from "../components/Card";

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>The Game is Over!</Text>
      <Card style={styles.card}>
        <Text>Number of rounds: {props.roundsNumber}</Text>
        <Text>Number was: {props.userNumber}</Text>
        <CustomButton style={styles.button} onPress={props.onRestart}>
          NEW GAME
        </CustomButton>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    marginVertical: 10,
  },
  card: {
    width: 300,
    maxWidth: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
});

export default GameOver;
