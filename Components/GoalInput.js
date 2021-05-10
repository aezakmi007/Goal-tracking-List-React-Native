import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Button,
  FlatList,
  Modal,
} from "react-native";

function GoalInput(props) {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Course Goal"
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonView}>
          <View style={styles.button}>
            <Button
              style={styles.cancelButton}
              title="CANCEL"
              color="red"
              onPress={props.handelCancel}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Add"
              onPress={() => {
                props.onAddGoal(enteredGoal);
                setEnteredGoal("");
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%",
    marginBottom: 10,
  },
  inputContainer: {
    // flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonView: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-evenly",
  },
  cancelButton: {
    // marginRight: 10,
  },
  button: {
    width: "40%",
  },
});
export default GoalInput;
