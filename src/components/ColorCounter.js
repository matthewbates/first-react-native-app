import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({ color }) => {
  return (
    <View>
      <Text>{color}</Text>
      {/* to escape a backtick literal, you can use a backslash */}
      <Button title={`Increase ${color}`} />
      <Button title={`Decrease ${color}`} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
