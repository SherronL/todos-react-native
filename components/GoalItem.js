import React from "react";
// touchable wrappers/components, touchablewithoutfeedback, etc
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = props => {
  return (
    // activeOpacity is click effect
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.onDelete.bind(this, props.id)}
    >
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
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
