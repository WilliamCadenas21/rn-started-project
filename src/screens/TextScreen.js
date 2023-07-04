import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const TextScreen = () => {
  return (
    <View>
      <Text>TextScreen</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

export default TextScreen;

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});
