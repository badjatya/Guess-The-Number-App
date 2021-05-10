import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

import NumberContainer from "../components/NumberContainer";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  );
  return (
    <View style={styles.container}>
      <Text>Opponent's Guess</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default GameScreen;
