import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = props => {
  // two functions
  // enteredGoal is used to access
  const [enteredGoal, setEnteredGoal] = useState(""); // binds to txt input
  // another way of the same function
  // since its a constant, its easier understand its usage
  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText); // stores in enteredGoal
  };

  // handles adding and clearing the input
  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };
  return (
    // modal adds another view on top of whatever is already there
    <Modal visible={props.isVisible} animationType="slide">
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="Add your shit"
          style={styles.textInput}
          // useState listens to change of text
          // call function for every keystroke so no ()
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonSize}>
            <Button title="Cancel" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.buttonSize}>
            <Button
              title="Add"
              // forwards enteredGoal back to the App.js addGoalHandler
              // bind() pre configure some args and eventually get passed
              // 1st arg (this) doesnt matter
              onPress={addGoalHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default GoalInput;

const styles = StyleSheet.create({
  textInputContainer: {
    // flex takes all available space
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  },
  textInput: {
    width: "80%",
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%"
  },
  // standardize the buttons size
  buttonSize: {
    width: "40%" // or pixel value
  }
});
