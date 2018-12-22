import React from "react";
import { View, StyleSheet } from "react-native";

export default () => (
  <View style={styles.container}>
    <View style={[styles.box, { backgroundColor: getRandomColor() }]} />
    <View style={[styles.box, { backgroundColor: getRandomColor() }]} />
    <View style={[styles.box, { backgroundColor: getRandomColor() }]} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  box: { flexBasis: 100, height: 100, flexGrow: 1 }
});

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
