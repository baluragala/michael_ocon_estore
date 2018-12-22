import React, { Component } from "react";
import { View, Text, TextInput, Picker, Alert, Button } from "react-native";

export default class AddProduct extends Component {
  static navigationOptions = {
    title: "New Product"
  };

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: 0,
      stock: 0,
      category: "",
      description: "",
      categories: ["Mobile", "Laptop", "Others"]
    };
  }

  handleNameChange = name => {
    this.setState({ name: name });
    console.log("name", name);
  };

  handleDescriptionChange = description => {
    this.setState({ description });
    console.log("description", description);
  };

  handlePriceChange = price => {
    this.setState({ price });
    console.log("price", price);
  };

  handleStockChange = stock => {
    this.setState({ stock });
    console.log("stock", stock);
  };

  handeSubmit = () => {
    let data = { ...this.state };
    delete data.categories;
    fetch("http://localhost:3000/products", {
      body: JSON.stringify(data),
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(p => Alert.alert("Success"));
  };

  render() {
    return (
      <View
        style={styles.container}
        ref={eleRef => {
          this.eleRef = eleRef;
        }}
      >
        <Button
          title="SET"
          onPress={() => this.eleRef.setNativeProps({ opacity: 0.0 })}
        />

        <TextInput
          placeholder="Product Name"
          value={this.state.name}
          onChangeText={this.handleNameChange}
        />
        <TextInput
          style={{ backgroundColor: "yellow", height: 90 }}
          numberOfLines={5}
          multiline={true}
          placeholder="Description"
          value={this.state.description}
          onChangeText={this.handleDescriptionChange}
        />
        <TextInput
          placeholder="Product Price"
          value={`${this.state.price}`}
          onChangeText={this.handlePriceChange}
          keyboardType="number-pad"
        />
        <TextInput
          placeholder="Product Stock"
          value={`${this.state.stock}`}
          onChangeText={this.handleStockChange}
          keyboardType="number-pad"
        />
        <Picker
          selectedValue={this.state.category}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ category: itemValue })
          }
        >
          {this.state.categories.map(c => (
            <Picker.Item key={c} label={c} value={c} />
          ))}
        </Picker>
        <Button title="Add" onPress={this.handeSubmit} />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    padding: 20,
    alignItems: "stretch"
  }
};
