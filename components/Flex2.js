import React from "react";
import { View, StyleSheet } from "react-native";

export default () => (
  <View style={styles.container}>
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map(n => (
      <View
        key={n}
        style={[styles.box, { backgroundColor: getRandomColor() }]}
      />
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    alignContent: "stretch"
  },
  box: { height: 100 }
});

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
