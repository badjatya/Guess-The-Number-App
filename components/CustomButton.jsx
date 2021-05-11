import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CustomButton = (props) => {
  <TouchableOpacity onPress={props.onPress}>
    <View>
      <Text>{props.children}</Text>
    </View>
  </TouchableOpacity>;
};

export default CustomButton;
