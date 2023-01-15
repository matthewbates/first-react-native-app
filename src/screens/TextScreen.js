import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [password, setPassword] = useState("");

  const handleOnChangeText = (newValue) => {
    setPassword(newValue);
  };

  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        onChangeText={handleOnChangeText}
        style={styles.input}
        autoCapitalize="none"
        autoComplete={false}
        value={password}
      />
      {password.length < 4 ? (
        <Text>Password must be at least four characters</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
