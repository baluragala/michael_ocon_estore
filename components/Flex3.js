import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default () => (
  <View style={styles.container}>
    <Text style={styles.headerStyle}>position</Text>
    <View style={styles.elementsContainer}>
      <View style={[{ position: "absolute", opacity: 0.1 }, styles.red]} />
      <View style={[{ position: "relative", left: 100 }, styles.yellow]} />
      <View style={[{ position: "relative", left: 100 }, styles.green]} />
    </View>
  </View>
);

const styles = {
  green: {
    backgroundColor: "green",
    height: 50,
    width: 50
  },
  yellow: {
    backgroundColor: "yellow",
    height: 50,
    width: 50
  },
  red: {
    backgroundColor: "red",
    height: 50,
    width: 50
  },
  container: {
    marginTop: 48,
    flex: 1
  },
  headerStyle: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "300",
    marginBottom: 24
  },
  elementsContainer: {
    flex: 1,
    backgroundColor: "#ecf5fd",
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 24
  }
};
