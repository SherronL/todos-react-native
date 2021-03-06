import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList
} from "react-native";
import { uuid } from "uuidv4";

//custom components
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  // 2nd function changes first state
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  console.log("New render cycle: ");
  console.log(courseGoals);

  // input is string
  /*
  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }*/

  // goalTitle is an arg and gets fowarded to GoalInput.js
  const addGoalHandler = goalTitle => {
    // set to new array by copying and add
    // pass in function instead of value works better
    // ListView uses list of objects so key is needed
    // return
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: uuid(), value: goalTitle }
    ]);
    setIsAddMode(false);
  };

  // resets the mode to false
  const cancelGoalHandler = () => {
    setIsAddMode(false);
  };

  // filter() builds a new array based on old array
  const removeGoalHandler = goalId => {
    console.log("TO BE DELETED: " + goalId);
    console.log(courseGoals);

    setCourseGoals(currentGoals => {
      // check all array, if id does match, then we delete it
      // this function runs on every element its calling
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  return (
    // map takes array of data to array of components
    // takes function and execute for every element
    // inline arrow function returns Text component
    // add unique Key so react can update more efficiently
    // key should always be in root element in this case View
    // can wrap text in another View to style them

    // making the entire page scrollable
    // not recommended because it pre renders
    // FlatList replaces ScrollView
    //
    <View style={styles.screen}>
      <Button title="Add new Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        isVisible={isAddMode}
        // COMPONENT CALL
        // makes up a prop name and pass a function and gets passed to GoalInput.js
        // so when called, it calls addGoalHandler func
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalHandler}
      />
      <FlatList //3 parameters: keyExt, data and renderItem
        // extracts the key for id or uid use
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        // calling GoalItem and pass title as the item value
        // itemData is an obj that gets passed in

        // COMPONENT CALL
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
        // access the list item by calling value which holds data
      />
    </View>
  );
}

// stylesheet obj
// Flexbox: if flexDirection is row, then main axis is x
// Flexbox: if flexDirection is column, then main axis is y
const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
