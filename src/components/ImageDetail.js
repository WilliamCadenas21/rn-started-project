import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ImageDetail = (props) => {
  const { title } = props

  return (
    <View>
      <Text>ImageDetail of a {title}</Text>
    </View>
  );
};

export default ImageDetail;

const styles = StyleSheet.create({});
