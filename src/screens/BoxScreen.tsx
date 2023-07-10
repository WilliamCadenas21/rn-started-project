import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle1} >Child #1</Text>
      <Text style={styles.textStyle2} >Child #2</Text>
      <Text style={styles.textStyle3} >Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    // alignItems: 'stretch', // horizontal placement
    // flexDirection: 'row', // change the direction of the arrangement
    // justifyContent: 'flex-start' // work vertically
    
  },
  textStyle1:{
    borderWidth: 3,
    borderColor: 'red',
  },
  textStyle2:{
    borderWidth: 3,
    borderColor: 'red',
    alignSelf: 'flex-start',
    // position: 'absolute',
    // top:0,
    // right: 0,
    // bottom:0,
    // left:0
    ...StyleSheet.absoluteFillObject
  },
  textStyle3:{
    borderWidth: 3,
    borderColor: 'red',
  }
  
});

export default BoxScreen;
