import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Platform,
  Dimensions
} from "react-native";

const { width, height } = Dimensions.get("window");

console.log("window", Dimensions.get("window"));
console.log("screen", Dimensions.get("screen"));

export default class ScrollViewExample extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        horizontal={true}
        directionalLockEnabled={false}
      >
        <Image
          style={{ width: width * 2, height: height * 2 }}
          resizeMode="contain"
          source={{
            uri:
              "https://cdn.shopify.com/s/files/1/0179/5445/products/imgur-sticker-banana_1024x1024.jpg?v=1408378099"
          }}
        />
      </ScrollView>
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
