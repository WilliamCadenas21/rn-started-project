import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  return (
    <View>
      <Text>SquareScreen</Text>
      <ColorCounter color="Red"/>
      <ColorCounter color="Blue"/>
      <ColorCounter color="Green"/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;

