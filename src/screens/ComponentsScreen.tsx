import React from "react"; // we're importing all the react library
import { Text, StyleSheet, View } from "react-native"; //we use curly braces cause is a small part

const ComponentsScreen = () => {
  // const greeting = 'hi there im John'
  const greeting1 = 'Getting started with React Native! and have a font size of 20'
  const greeting2 = 'My name is John and have a font size of 20'
  
  return (
    <View>
      {/* <Text style={styles.textStyle}>this is the component</Text> */}
      {/* <Text>{greeting}</Text> */}
      {/* {greeting} */}
      <Text style={styles.textStyle1}>{greeting1}</Text>
      <Text style={styles.textStyle2}>{greeting2}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle1: {
    fontSize: 45,
  },
  textStyle2: {
    fontSize: 20,
  },
});

export default ComponentsScreen;

//primitive components
/**
 * text -> p
 * image -> img
 * view -> div
 * button -> button
 * Babel convert jsx to plain js
 * rn bundler use babel
 */
