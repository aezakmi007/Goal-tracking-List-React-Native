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

function GoalInput(props) {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Course Goal"
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button
        title="Add"
        onPress={() => {
          props.onAddGoal(enteredGoal);
          setEnteredGoal("");
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export default GoalInput;
