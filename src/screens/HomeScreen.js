import React from "react";
import { Text, StyleSheet, Button, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

// there are TWO types of buttons with React Native: <Button/> and <TouchableOpacity>
// the <Button /> element is self-closing, <TouchableOpacity> is not

// since props contains an array of objects, we can destructure out what we want
// props holds navigation, navigation holds navigate
const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to Components screen"
        onPress={() => navigation.navigate("Components")}
      />
      <Button
        title="Go to Title screen"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="Go to Image screen"
        onPress={() => navigation.navigate("Image")}
      />
      <Button
        title="Go to Counter screen"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Go to Color Screen"
        onPress={() => navigation.navigate("Color")}
      />
      <Button
        title="Go to Square Screen"
        onPress={() => navigation.navigate("Square")}
      />
      <Button
        title="Go to Text Screen"
        onPress={() => navigation.navigate("Text")}
      />
      <Button
        title="Go to Box Screen"
        onPress={() => navigation.navigate("Box")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
