import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import CustomButton from "../components/CustomButton";
import Colors from "../constants/Colors";
import Card from "../components/Card";

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <Image style={styles.image} source={require("../assets/Game2.png")} />
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
    backgroundColor: Colors.secondary,
    marginVertical: 10,
  },
  card: {
    width: 300,
    maxWidth: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  screen: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  image: {
    width: 400,
    height: 300,
  },
});

export default GameOver;
