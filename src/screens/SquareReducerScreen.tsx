import { Text, View } from "react-native";
import React, { useReducer } from "react";
import ColorCounter from "../components/ColorCounter";

const INCREMENT = 25;

interface stateI {
  red: number,
  green: number,
  blue: number,
  [key: string]: number; // Index signature
}

const INITIAL_STATE = {
  red: 0,
  green: 0,
  blue: 0,
};

interface reducerHandlerAction {
  type: string,
  payload: {
    amount: number
  }
}

const reducerHandler = (state : stateI = INITIAL_STATE, { type, payload } : reducerHandlerAction) => {
  type ColorType = 'red' | 'green' | 'blue';
  const colorType : string = type.split('_')[1]
  const { amount } = payload
  
  // if (!state[type]) return state;
  if (state[colorType as ColorType] + amount > 255 || state[colorType as ColorType] + amount < 0)
    return state;

  switch (type) {
    case "change_red":
      return { ...state, red: state.red + amount };

    case "change_green":
      return { ...state, green: state.green + amount };

    case "change_blue":
      return { ...state, blue: state.blue + amount };

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
        onIncrease={async () => dispatch({ type: "change_red", payload: { amount: INCREMENT } })
        }
        onDecrease={async () => dispatch({ type: "change_red", payload: { amount: -INCREMENT } })
        }
      />
      <ColorCounter
        color="Blue"
        onIncrease={async () => dispatch({ type: "change_blue", payload: { amount: INCREMENT } })
        }
        onDecrease={async () => dispatch({ type: "change_blue", payload: { amount: -INCREMENT } })
        }
      />
      <ColorCounter
        color="Green"
        onIncrease={async () => dispatch({ type: "change_green", payload: { amount: INCREMENT } })
        }
        onDecrease={async () => dispatch({ type: "change_green", payload: { amount: -INCREMENT } })
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

export default SquareReducerScreen;
