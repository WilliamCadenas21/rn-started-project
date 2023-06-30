import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ImageDetail = (props) => {
  const { title, imageSource, score } = props;

  return (
    <View>
      <Image source={imageSource} />
      <Text>ImageDetail of a {title}</Text>
      <Text>Score is: {score}</Text>
    </View>
  );
};

export default ImageDetail;

const styles = StyleSheet.create({});
