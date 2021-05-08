import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Button,
  FlatList,
} from "react-native";
import GoalInput from "./Components/GoalInput";
import GoalItem from "./Components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals([
      ...courseGoals,
      { key: Math.random().toString(), value: goalTitle },
    ]);
    console.log(goalTitle, courseGoals);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals(courseGoals.filter((goal) => goal.key !== goalId));
    // setCourseGoals((currentGoals) => {
    //   return currentGoals.filter((goal) => goal.id !== goalId);
    // });
  };
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <GoalInput onAddGoal={addGoalHandler} />
      </View>
      <FlatList
        keyExtractor={(item, index) => item.key}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.key}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
