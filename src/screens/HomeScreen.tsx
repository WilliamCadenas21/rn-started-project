import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { NavigationStackScreenProps } from "react-navigation-stack";

const HomeScreen = ({ navigation }: NavigationStackScreenProps) => {
  return (
    <View>
      <Text style={styles.text}>hi there fine</Text>
      <Button
        onPress={() => {
          navigation.navigate("Components");
        }}
        title="Go to Components demo "
      />
      <Button
        onPress={() => {
          navigation.navigate("List");
        }}
        title="Go to List demo"
      />
      <Button
        onPress={() => {
          navigation.navigate("Screen");
        }}
        title="Go to Screen demo"
      />
      <Button
        onPress={() => {
          navigation.navigate("Counter");
        }}
        title="Go to Counter demo"
      />
      <Button
        onPress={() => {
          navigation.navigate("Color");
        }}
        title="Go to Color demo"
      />
      <Button
        onPress={() => {
          navigation.navigate("Square");
        }}
        title="Go to Square demo"
      />
      <Button
        onPress={() => {
          navigation.navigate("SquareReducer");
        }}
        title="Go to Square Reducer demo"
      />
      <Button
        onPress={() => {
          navigation.navigate("CounterReducer");
        }}
        title="Go to Counter Reducer demo"
      />
      <Button
        onPress={() => {
          navigation.navigate("Text");
        }}
        title="Go to Text demo"
      />
      <Button
        onPress={() => {
          navigation.navigate("Box");
        }}
        title="Go to Box demo"
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
