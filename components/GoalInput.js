import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState(""); // binds to txt input
  // another way of the same function
  // since its a constant, its easier understand its usage
  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText); // stores in enteredGoal
  };
  return (
    <View style={styles.textInputContainer}>
      <TextInput
        placeholder="Add your shit"
        placeholderTextColor="red"
        style={styles.textInput}
        // useState listens to change of text
        // call function for every keystroke so no ()
        onChangeText={goalInputHandler}
      />
      <Button
        title="Add"
        // forwards enteredGoal back to the App.js addGoalHandler
        onPress={props.onAddGoal.bind(this, enteredGoal)}
      />
    </View>
  );
};
export default GoalInput;

const styles = StyleSheet.create({
  textInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center"
  },
  textInput: {
    width: "80%",
    borderWidth: 1,
    borderColor: "red",
    padding: 10
  }
});
