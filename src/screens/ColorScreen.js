import { View, Text, Button, StyleSheet } from "react-native";
import React, { useState } from "react";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  console.log(colors)

  return (
    <View>
      <Button
        title="add color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />
      <Text>ColorScreen</Text>
      <View style={{ height: 100, width: 100, backgroundColor: randomRgb() }} />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
