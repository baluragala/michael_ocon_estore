import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

export default class Clock extends React.Component {
  //static propTypes
  constructor(props) {
    super(props);
    this.state = {
      time:
        props.clockType == "local"
          ? new Date().toLocaleString()
          : new Date().toISOString(),
      type: "digital"
    };
    setInterval(() => {
      this.setState({
        time:
          props.clockType == "local"
            ? props.dateOnly
              ? new Date().toLocaleDateString()
              : new Date().toLocaleString()
            : new Date().toISOString()
      });
    }, 1000);
  }

  render() {
    console.log("Clock - render");
    return (
      <View>
        <Text onPress={() => this.props.onClockClick(this.props.clockType)}>
          {this.state.type} - {this.state.time} - {this.props.clockType}
        </Text>
      </View>
    );
  }
}

Clock.propTypes = {
  clockType: PropTypes.string.isRequired,
  onClockClick: PropTypes.func.isRequired
};

Clock.defaultProps = {
  clockType: "iso",
  onClockClick: () => {
    console.log("NOT IMPLEMENTED");
  }
};
