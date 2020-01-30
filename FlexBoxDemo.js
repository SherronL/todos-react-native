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
// nested views
// top most to inner most
// flexbox(granddaddy) styler and children elements

<View
  style={{
    padding: 50,
    flexDirection: "row",
    width: "80%",
    height: 300,
    justifyContent: "space-between",
    alignItems: "stretch"
  }}
>
  <View
    style={{
      backgroundColor: "red",
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    <Text>1</Text>
  </View>
  <View
    style={{
      backgroundColor: "green",
      flex: 2,
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    <Text>2</Text>
  </View>
  <View
    style={{
      backgroundColor: "blue",
      flex: 3,
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    <Text>3</Text>
  </View>
</View>;
