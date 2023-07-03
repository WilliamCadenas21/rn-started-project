import { StyleSheet, Text, View } from "react-native";
import React, { useReducer } from "react";
import ColorCounter from "../components/ColorCounter";

const INCREMENT = 25;

const INITIAL_STATE = {
  red: 0,
  green: 0,
  blue: 0,
};

const reducerHandler = (state = INITIAL_STATE, { type, payload }) => {
  //action === {colorToChange: string, amount: number}

  switch (type) {
    case "red":
      return { ...state, red: state.red + payload.amount };

    case "green":
      return { ...state, green: state.green + payload.amount };

    case "blue":
      return { ...state, blue: state.blue + payload.amount };

    default:
      return state;
  }
};

const SquareReducerScreen = () => {
  const [state, dispatch] = useReducer(reducerHandler, INITIAL_STATE);

  return (
    <View>
      <Text style={{ fontSize: 20 }}>Square Reducer Screen</Text>
      <ColorCounter
        color="Red"
        onIncrease={() =>
          dispatch({ type: "red", payload: { amount: INCREMENT } })
        }
        onDecrease={() =>
          dispatch({ type: "red", payload: { amount: -INCREMENT } })
        }
      />
      <ColorCounter
        color="Blue"
        onDecrease={() =>
          dispatch({ type: "blue", payload: { amount: INCREMENT } })
        }
        onIncrease={() =>
          dispatch({ type: "blue", payload: { amount: -INCREMENT } })
        }
      />
      <ColorCounter
        color="Green"
        onIncrease={() =>
          dispatch({ type: "green", payload: { amount: INCREMENT } })
        }
        onDecrease={() =>
          dispatch({ type: "green", payload: { amount: -INCREMENT } })
        }
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${state.red},${state.green},${state.blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareReducerScreen;
