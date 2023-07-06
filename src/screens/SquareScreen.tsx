import { Text, View } from "react-native";
import React, { useState } from "react";
import ColorCounter from "../components/ColorCounter";

const INCREMENT = 25;

const SquareScreen = () => {
  const [red, setRed] = useState<number>(0);
  const [green, setGreen] = useState<number>(0);
  const [blue, setBlue] = useState<number>(0);
  
  const setColor = (color: string, change: number) => {
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
        onIncrease={async () => setColor("red", INCREMENT)}
        onDecrease={async () => setColor("red", -INCREMENT)}
      />
      <ColorCounter
        color="Blue"
        onDecrease={async () => setColor("blue", -INCREMENT)}
        onIncrease={async () => setColor("blue", +INCREMENT)}
      />
      <ColorCounter
        color="Green"
        onIncrease={async () => setColor("green", +INCREMENT)}
        onDecrease={async () => setColor("green", -INCREMENT)}
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

export default SquareScreen;
