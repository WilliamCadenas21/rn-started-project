import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BoxScreenExercise = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle1}></Text>
      {/*way4*/}
      <Text style={styles.viewStyle2}>
        <Text style={styles.textStyle2}></Text>
      </Text>
      <Text style={styles.textStyle3}></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    //way 1
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  textStyle1: {
    height: 50,
    width: 50,
    backgroundColor: "red",
  },
  textStyle2: {
    height: 50,
    width: 50,
    backgroundColor: "green",
    // way 1
    // marginTop: 50

    // way 2
    // alignSelf: 'flex-end'

    // way 3
    // top: 50
  },
  viewStyle2: {
    height: 100,
    width: 50,
    justifyContent: "flex-end",
    backgroundColor: "blue",
  },
  textStyle3: {
    height: 50,
    width: 50,
    backgroundColor: "purple",
  },
});

export default BoxScreenExercise;
