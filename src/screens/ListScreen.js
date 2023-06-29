import React from "react";

import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "friend #1" },
    { name: "friend #2" },
    { name: "friend #3" },
    { name: "friend #4" },
    { name: "friend #5" },
    { name: "friend #6" },
    { name: "friend #7" },
    { name: "friend #8" },
  ];

  // const friends = [
  //   { name: "friend #1", key: '1' },
  //   { name: "friend #2", key: '2' },
  //   { name: "friend #3", key: '3' },
  //   { name: "friend #4", key: '4' },
  //   { name: "friend #5", key: '5' },
  //   { name: "friend #6", key: '6' },
  //   { name: "friend #7", key: '7' },
  //   { name: "friend #8", key: '8' },
  // ];

  return (
    <FlatList
      // horizontal={true}
      // showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        // return <Text key={item.key}>{item.name}</Text>
        return <Text style={styles.textStyle}>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
