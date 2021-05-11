import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CustomButton = (props) => {
  <TouchableOpacity onPress={props.onPress}>
    <View style={{ ...styles.button, ...props.style }}>
      <Text style={{ ...styles.buttonText, ...props.textStyling }}>
        {props.children}
      </Text>
    </View>
  </TouchableOpacity>;
};

const styles = StyleSheet.create({
  button: {},
  buttonText: {},
});

export default CustomButton;
