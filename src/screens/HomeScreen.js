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
        title="Go to components demo "
      />
      <Button
        onPress={() => {
          props.navigation.navigate("List");
        }}
        title="Go to list demo"
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
