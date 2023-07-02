import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ColorCounter from "../components/ColorCounter";

const INCREMENT = 50

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <View>
      <Text>SquareScreen</Text>
      <ColorCounter
        color="Red"
        onIncrease={() => setRed(red + INCREMENT)}
        onDecrease={() => setRed(red - INCREMENT)}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => setBlue(blue + INCREMENT)}
        onDecrease={() => setBlue(blue - INCREMENT)}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => setGreen(green + INCREMENT)}
        onDecrease={() => setGreen(green - INCREMENT)}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
