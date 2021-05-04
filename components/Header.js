import React from "react";
import { View, StyleSheet, Text, ProgressViewIOSComponent } from "react-native";

const Header = (props) => {
  return (
    <View style={StyleSheet.headerContainer}>
      <Text>{props.title}</Text>
    </View>
  );
};

export default Header;
