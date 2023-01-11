import React from "react";
import { Text, StyleSheet, Button, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

// there are TWO types of buttons with React Native: <Button/> and <TouchableOpacity>
// the <Button /> element is self-closing, <TouchableOpacity> is not

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        title="Go to Components screen"
        onPress={() => props.navigation.navigate("Components")}
      />
      <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
        <Text>Go to list Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
