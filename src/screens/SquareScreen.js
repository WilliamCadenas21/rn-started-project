import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ColorCounter from "../components/ColorCounter";

const INCREMENT = 25;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    //color === 'red', 'green', 'blue'
    //change === +15, -15

    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 || setRed(red + change);
        break;
      case "blue":
        blue + change > 255 || blue + change < 0 || setBlue(blue + change);
        break;
      case "green":
        green + change > 255 || green + change < 0 || setGreen(green + change);
        break;
      default:
        break;
    }
  };
  return (
    <View>
      <Text>SquareScreen</Text>
      <ColorCounter
        color="Red"
        onIncrease={() => setColor("red", INCREMENT)}
        onDecrease={() => setColor("red", -INCREMENT)}
      />
      <ColorCounter
        color="Blue"
        onDecrease={() => setColor("blue", - INCREMENT)}
        onIncrease={() => setColor("blue", + INCREMENT)}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => setColor("green", + INCREMENT)}
        onDecrease={() => setColor("green", - INCREMENT)}
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
