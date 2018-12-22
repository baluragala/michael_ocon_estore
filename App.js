import React from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import ProductListWithFlatList from "./components/ProductListWithFlatList";
import AddProduct from "./components/AddProduct";

import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import ProductDetail from "./components/ProductDetail";
import { Button } from "react-native";
import StoreLocator from "./components/StoreLocator";
import About from "./components/About";

const ShoppingNavigator = createStackNavigator(
  {
    AddProduct: AddProduct,
    Home: ProductListWithFlatList,
    Detail: ProductDetail
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "EStore",
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTitleStyle: {
        fontWeight: "bold",
        color: "#ffffff"
      },
      headerTintColor: "#fff"
    }
  }
);

const AppNavigator = createBottomTabNavigator(
  {
    Shopping: ShoppingNavigator,
    Stores: StoreLocator,
    About: About
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName == "Shopping")
          return (
            <MaterialIcons
              name="shopping-basket"
              size={focused ? 36 : 25}
              color={tintColor}
            />
          );
        else
          return (
            <MaterialIcons
              name="local-grocery-store"
              size={focused ? 36 : 25}
              color={tintColor}
            />
          );
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);

export default createAppContainer(AppNavigator);

/*

Mounting
  constructor
  render
  componentDidMount
Updating
  render
  componentDidUpdate
Unmounting
  componentWillUnmount

*/
