import React from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    marginVertical: 15,
    borderBottomColor: "grey",
    borderBottomWidth: 2,
  },
});

export default Input;
