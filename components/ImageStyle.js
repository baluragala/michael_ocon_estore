import React, { Component } from "react";
import { View, Image, Dimensions, Platform, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

console.log("window", Dimensions.get("window"));
console.log("screen", Dimensions.get("screen"));

export default class ImageStyle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width, height }}
          resizeMode="contain"
          source={{
            uri:
              "https://cdn.shopify.com/s/files/1/0179/5445/products/imgur-sticker-banana_1024x1024.jpg?v=1408378099"
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: "blue"
      },
      android: {
        backgroundColor: "green"
      }
    })
  }
});
