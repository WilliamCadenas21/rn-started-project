import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const ColorCounter = ({ color }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`increase ${color}`} />
      <Button title={`decrease ${color}`} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
