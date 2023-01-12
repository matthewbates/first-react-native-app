import React, { useReducer } from "react";
import { View, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

// by convention, we define reducer function outside the component
// state === { red: number, green: number, blue: number }
// action === { type: "red" || "green" || "blue", payload: 15 ||-15 }
// type => str that describes the exact change operation we want to make
// payload => some data that is critical to the change operation
function reducer(state, action) {
  // switch always utilizes action
  switch (action.type) {
    case "red":
      // spread the existing object as to not update state directly
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case "green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "blue":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    // always add a default case
    default:
      return state;
  }
}

const SquareScreen = () => {
  // second argument is the initial value for the state object
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  return (
    <View>
      <ColorCounter
        // type refers to the case
        onIncrease={() => dispatch({ type: "red", payload: 15 })}
        onDecrease={() => dispatch({ type: "red", payload: -1 * 15 })}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => dispatch({ type: "green", payload: 15 })}
        onDecrease={() => dispatch({ type: "green", payload: -1 * 15 })}
        color="Green"
        o
      />
      <ColorCounter
        onIncrease={() => dispatch({ type: "blue", payload: 15 })}
        onDecrease={() => dispatch({ type: "blue", payload: -1 * 15 })}
        color="Blue"
      />
      <View
        style={{
          height: 200,
          width: 200,
          backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default SquareScreen;
