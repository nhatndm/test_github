import React, { Component } from "react";
import PropsType from "prop-types";
import "./index.css";

export default class Pill extends Component {
  render() {
    const { name } = this.props;
    return <div className="pill">{name}</div>;
  }
}

Pill.propTypes = {
  name: PropsType.string
};

Pill.defaultProps = {
  name: ""
};
