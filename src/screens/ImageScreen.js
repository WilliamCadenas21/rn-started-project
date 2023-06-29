import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {

  
  return (
    <>
      <ImageDetail title="forest"/>
      <ImageDetail title="beach"/>
      <ImageDetail title="mountain"/>
    </>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;

