// THIS IS THE useState ALTERNATIVE TO useReducer IN <SquareScreen />

import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "./components/ColorCounter";

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  // color === "red", "green", or "blue"
  // change === +20, -20

  const setColor = (color, change) => {
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
    }
  };

  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor("red", 20)}
        onDecrease={() => setColor("red", -1 * 20)}
      />
      <ColorCounter
        onIncrease={() => setColor("green", 20)}
        onDecrease={() => setColor("green", -1 * 20)}
      />
      <ColorCounter
        onIncrease={() => setColor("blue", 20)}
        onDecrease={() => setColor("blue", -1 * 20)}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
