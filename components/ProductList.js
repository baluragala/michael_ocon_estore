import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  ActivityIndicator
} from "react-native";
import ProductListItem from "./ProductListItem";

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: false,
      products: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("http://localhost:3000/products")
      .then(r => r.json())
      .then(products => {
        this.setState({ isLoading: false, products });
      });
  }

  onSale = id => {
    let index = this.state.products.findIndex(p => p.id === id);
    this.state.products[index].stock--;
    this.setState({ products: this.state.products });
  };

  render() {
    console.log("state", this.state);
    return (
      <ScrollView
        style={{ flex: 1 }}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={() => {
              this.setState({ isRefreshing: true });
              setTimeout(() => {
                this.state.products.unshift({
                  id: 0,
                  title: "mac book pro",
                  price: 100000,
                  rating: 4,
                  stock: 10
                });
                this.setState({
                  isRefreshing: false,
                  products: this.state.products
                });
              }, 2000);
            }}
          />
        }
      >
        {this.state.isLoading && (
          <ActivityIndicator size="large" color="purple" />
        )}
        {this.state.products.map(p => {
          console.log(p);
          return (
            <ProductListItem key={p.id} product={p} onSale={this.onSale} />
          );
        })}
      </ScrollView>
    );
  }
}
