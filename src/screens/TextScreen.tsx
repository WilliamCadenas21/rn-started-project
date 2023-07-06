import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const TextScreen = () => {
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text style={styles.title}>TextScreen</Text>
      <TextInput
        style={styles.input}
        value={password}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(newValue) => {
          setPassword(newValue);
        }}
      />
      <Text>here is the input: {password}</Text>
      {password.length < 5  ? <Text>password must be longer than 5 characters</Text>: null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
  title: {
    fontSize: 25,
  },
});

export default TextScreen;

