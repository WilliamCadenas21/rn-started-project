import { View, Text, Button } from "react-native";
import React, { useReducer } from "react";

const initialState = {
  counter: 0,
};

interface reducerHandlerAction {
  type: string,
  payload: number
}

const reducerHandler = (state = initialState, { type, payload } : reducerHandlerAction) => {
  const { counter } = state
  
  switch (type) {
    case "increase":
      return { ...state, counter: counter + payload };

    case "decrease":
      return { ...state, counter: counter + payload };

    default:
      return state;
  }
};

const CounterReducerScreen = () => {
  const [state, dispatch] = useReducer(reducerHandler, initialState);
  const { counter } = state;

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: "increase", payload: 1 });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: "decrease", payload: -1 });
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

export default CounterReducerScreen;
