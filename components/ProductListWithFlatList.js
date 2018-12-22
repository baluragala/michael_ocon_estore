import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  FlatList,
  Button,
  ActivityIndicator
} from "react-native";
import ProductListItem from "./ProductListItem";

export default class ProductListWithFlatList extends Component {
  static navigationOptions = args => {
    return {
      headerRight: (
        <Button
          title="ADD"
          color="#fff"
          onPress={() => args.navigation.navigate("AddProduct")}
        />
      )
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: false,
      products: [],
      isLoading: false,
      page: 1,
      limit: 12,
      moreData: true
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this._getProducts();
  }

  _getProducts = () => {
    if (this.state.moreData) {
      fetch(
        `http://localhost:3000/products?_page=${this.state.page}&_limit=${
          this.state.limit
        }`
      )
        .then(r => r.json())
        .then(products => {
          this.setState({
            isLoading: false,
            products: [...this.state.products, ...products],
            moreData: products.length == this.state.limit ? true : false,
            page: this.state.page + 1
          });
        });
    }
  };

  _getMore = () => {
    this._getProducts();
  };

  onSale = id => {
    let index = this.state.products.findIndex(p => p.id === id);
    this.state.products[index].stock--;
    this.setState({ products: this.state.products });
  };

  _renderRefreshControl() {
    return (
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
    );
  }

  _renderItem = ({ index, item }) => {
    return (
      <ProductListItem
        key={item.id}
        product={item}
        onSale={this.onSale}
        navigation={this.props.navigation}
      />
    );
  };

  _keyExtractor = (item, index) => {
    return `${index}`;
  };

  render() {
    console.log("props", this.props);
    return (
      <View style={{ flex: 1 }}>
        <Button
          onPress={() => this.props.navigation.navigate("AddProduct")}
          title="ADD PRODUCT"
        />
        {this.state.isLoading && (
          <ActivityIndicator size="large" color="purple" />
        )}
        <FlatList
          refreshControl={this._renderRefreshControl()}
          data={this.state.products}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
          onEndReachedThreshold={0.5}
          onEndReached={this._getMore}
        />
      </View>
    );
  }
}
