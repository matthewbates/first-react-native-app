import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

// initialize reducer function outside component scope
const reducer = (state, action) => {
  // action is always the switch argument
  switch (action.type) {
    // state is NEVER updated directly
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const CounterScreen = () => {
  // initialize useReducer hook
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: "increment", count: 1 })}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: "decrement", count: 1 })}
      />
      <Text>Current Count: {state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
