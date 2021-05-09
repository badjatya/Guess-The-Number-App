import React from "react";
import {View, Text, StyleSheet} from "react-native";

const NumberContainer = props => {
    <View style={styles.container}>
        <Text>{props.children}</Text>
    </View>
}

const styles = StyleSheet.create({
    container:{}
})

export default NumberContainer;