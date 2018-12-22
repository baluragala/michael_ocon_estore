import React from "react";
import { Text } from "react-native";

export default function Header(props) {
  return <Text>Header-{props.title}</Text>;
}

export function SubHeader1() {
  return <Text>SubHeader1-MyStore</Text>;
}

export function SubHeader2() {
  return <Text>SubHeader2-MyStore</Text>;
}
