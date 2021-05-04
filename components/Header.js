import React from "react";
import { View, StyleSheet, Text, ProgressViewIOSComponent } from "react-native";

import Colors from "../constants/Colors";

const Header = (props) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: 100,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 18,
    paddingTop: 20,
  },
});

export default Header;
