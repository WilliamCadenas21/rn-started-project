import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  console.log(props.navigation);
  return (
    <View>
      <Text style={styles.text}>hi there fine</Text>
      <Button
        onPress={() => {
          props.navigation.navigate("Components");
        }}
        title="Go to Components demo "
      />
      <Button
        onPress={() => {
          props.navigation.navigate("List");
        }}
        title="Go to List demo"
      />
      <Button
        onPress={() => {
          props.navigation.navigate("Screen");
        }}
        title="Go to Screen demo"
      />
      <Button
        onPress={() => {
          props.navigation.navigate("Counter");
        }}
        title="Go to Counter demo"
      />
      <Button
        onPress={() => {
          props.navigation.navigate("Color");
        }}
        title="Go to Color demo"
      />
      <Button
        onPress={() => {
          props.navigation.navigate("Square");
        }}
        title="Go to Square demo"
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
