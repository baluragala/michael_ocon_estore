import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

export default () => (
  <View style={styles.container}>
    <View style={[styles.box, styles.one]} />
    <View style={[styles.box, styles.two]}>
      <Text>This is line1</Text>
      <Text style={{ alignSelf: "flex-end" }}>This is line1</Text>
      <Text>This is line1</Text>
      <Text>This is line1</Text>
      <Button title="Press Me" onPress={() => {}} color="#fff" />
    </View>
    <View style={[styles.box, styles.three]} />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: "column" },
  box: {},
  one: {
    backgroundColor: "red",
    flex: 1
  },
  two: {
    backgroundColor: "green",
    flex: 10,
    alignItems: "center"
  },
  three: {
    backgroundColor: "blue",
    flex: 0.5
  }
});
