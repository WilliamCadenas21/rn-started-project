// import { StyleSheet } from "react-native";
import React from "react";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {

  return (
    <>
      <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')} score={5}/>
      <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')} score={5}/>
      <ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpg')} score={5}/>
    </>
  );
};

// const styles = StyleSheet.create({});

export default ImageScreen;

