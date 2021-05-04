import React from "react";
import { View, StyleSheet, Text, ProgressViewIOSComponent } from "react-native";

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
    backgroundColor: "#ffdde1",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 18,
    paddingTop: 20,
  },
});

export default Header;
