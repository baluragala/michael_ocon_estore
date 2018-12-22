import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default class ProductListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("this.props.PL", this.props);
    const { title, price, rating, stock, id } = this.props.product;
    return (
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() =>
          this.props.navigation.navigate("Detail", {
            product: this.props.product
          })
        }
      >
        <View style={styles.container}>
          <View style={styles.image}>
            <Image
              style={{ height: 120, width: 120 }}
              resizeMode="contain"
              source={{
                uri:
                  "https://rukminim1.flixcart.com/image/312/312/jmi22kw0/mobile/k/y/k/realme-c1-rmx1811-original-imaf9e7csexsdstd.jpeg?q=70"
              }}
            />
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>
              {title}({stock})
            </Text>
            <View style={styles.priceContainer}>
              <FontAwesome name="rupee" style={{ fontSize: 18 }} />
              <Text style={{ fontSize: 18, paddingLeft: 5 }}>{price}</Text>
            </View>
            <View style={styles.ratingContainer}>
              <FontAwesome name="star" style={{ fontSize: 18 }} />
              <Text style={{ paddingLeft: 10, fontWeight: "bold" }}>
                {rating}
              </Text>
            </View>
            <TouchableHighlight
              onPress={() => this.props.onSale(id)}
              underlayColor="red"
            >
              <View
                style={{
                  backgroundColor: "lightgrey",
                  borderRadius: 5,
                  padding: 10
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "red"
                  }}
                >
                  Sell
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    height: 150,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "grey",
    margin: 10,
    maxHeight: 150
  },
  image: {
    flex: 0.4,
    backgroundColor: "lightgrey",
    opacity: 0.5,
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    flex: 0.6,
    padding: 10
  },
  priceContainer: {
    flexDirection: "row",
    marginBottom: 10
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "skyblue"
  },
  ratingContainer: {
    marginBottom: 10,
    flexDirection: "row",
    backgroundColor: "lightgreen",
    maxWidth: 75,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10
  }
});
