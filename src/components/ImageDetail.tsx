import {
  Image,
  ImageSourcePropType,
  Text,
  View,
} from "react-native";
import React from "react";

interface ImageDetailProps {
  title: string;
  imageSource: ImageSourcePropType;
  score: number;
}

const ImageDetail = ({
  title,
  imageSource,
  score,
} : ImageDetailProps ) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>ImageDetail of a {title}</Text>
      <Text>Score is: {score}</Text>
    </View>
  );
};

export default ImageDetail;
