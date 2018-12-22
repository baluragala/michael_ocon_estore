import React, { Component } from "react";
import { View, Text } from "react-native";

export default class ProductDetail extends Component {
  static navigationOptions = props => {
    return {
      title: `Detail for ${props.navigation.getParam("product", {}).id}`,
      headerStyle: {
        backgroundColor: "green"
      }
    };
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> ProductDetail </Text>
        <Text>
          {JSON.stringify(
            this.props.navigation.getParam("product", "No Params")
          )}
        </Text>
      </View>
    );
  }
}
