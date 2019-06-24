import React, { Component } from "react";
import PropsType from "prop-types";
import "./index.css";

export default class CardInformation extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="card_information">
        <img src={data.avatar_url} alt={data.login} />
        <div className="information_wrapper">
          <div className="card_information_name">{data.name}</div>
          <div className="card_information_location">{data.location}</div>
        </div>
      </div>
    );
  }
}

CardInformation.propTypes = {
  data: PropsType.object
};

CardInformation.defaultProps = {
  data: {}
};
