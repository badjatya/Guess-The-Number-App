import React from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = (props) => {
  return <TextInput {...props} style={styles.input} />;
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    marginVertical: 10,
    borderBottomColor: "grey",
    borderBottomWidth: 2,
  },
});

export default Input;
