import React, { useState, useRef } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");
  const textInput = useRef(null);
  const changeHandler = val => {
    setText(val);
  };
  const submit = text => {
    submitHandler(text);
    setText("");
    textInput.current.clear();
  };
  return (
    <View>
      <TextInput
        style={StyleSheet.input}
        placeholder="Add new Todo"
        onChangeText={changeHandler}
        ref={textInput}
      />
      <Button onPress={() => submit(text)} title="add todo" color="coral" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  }
});
