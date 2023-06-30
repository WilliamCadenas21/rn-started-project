// import { StyleSheet } from "react-native";
import React from "react";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {

  return (
    <>
      <ImageDetail title="forest" imageSource={require('../../assets/forest.jpg')}/>
      <ImageDetail title="beach" imageSource={require('../../assets/beach.jpg')}/>
      <ImageDetail title="mountain" imageSource={require('../../assets/mountain.jpg')}/>
    </>
  );
};

// const styles = StyleSheet.create({});

export default ImageScreen;

