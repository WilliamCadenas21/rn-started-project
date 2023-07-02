import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {

  return (
    <View>
      <Text>{color}</Text>
      <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
      <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
