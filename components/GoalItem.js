import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GoalItem = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.title}</Text>
    </View>
  ); // props lets us to pass object
};

export default GoalItem;

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10, // margin to padding
    backgroundColor: "grey",
    borderColor: "black",
    borderWidth: 1
  }
});
