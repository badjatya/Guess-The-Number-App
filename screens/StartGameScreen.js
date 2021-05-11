import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

import Card from "../components/Card";
import Colors from "../constants/Colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import CustomButton from "../components/CustomButton";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number", "Number has to be between 1 and 99.", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue("");
    Keyboard.dismiss();
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You Selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <CustomButton
          style={styles.customButton}
          onPress={() => props.onStartGame(selectedNumber)}
        >
          START GAME
        </CustomButton>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start Game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Enter a Number</Text>
          <Input
            style={styles.inputField}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View>
              <CustomButton style={styles.reset} onPress={resetInputHandler}>
                RESET
              </CustomButton>
            </View>
            <View>
              <CustomButton
                style={styles.confirm}
                onPress={confirmInputHandler}
              >
                CONFIRM
              </CustomButton>
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
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
    width: "100%",
    justifyContent: "space-evenly",
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
    flex: 1,
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  customButton: {
    backgroundColor: Colors.primary,
  },
  reset: {
    backgroundColor: Colors.secondary,
  },
  confirm: {
    backgroundColor: Colors.primary,
  },
});

export default StartGameScreen;
