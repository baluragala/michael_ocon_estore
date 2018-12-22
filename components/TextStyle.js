import React from "react";
import { View, Text } from "react-native";

export default class TextStyle extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "red" }}>
          Welcome to <Text style={{ fontSize: 40, color: "blue" }}>RN</Text>
        </Text>
      </View>
    );
  }
}
