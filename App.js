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
  const [courseGoals, setCourseGoals] = useState([]);

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
      <GoalInput
        // COMPONENT CALL
        // makes up a name and gets passed to GoalInput.js
        // so when called, it calls addGoalHandler func
        onAddGoal={addGoalHandler}
      />
      <FlatList //3 parameters: keyExt, data and renderItem
        // extracts the key for id or uid use
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        // calling GoalItem and pass title as the item value
        // itemData is an obj that gets passed in

        // COMPONENT CALL
        renderItem={itemData => <GoalItem title={itemData.item.value} />}
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
