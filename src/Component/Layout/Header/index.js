import React, { PureComponent } from "react";
import { ReactComponent as BackIcon } from "../../../assets/icon/left-arrow.svg";
import PropsType from "prop-types";
import { Link } from "react-router-dom";
import "./index.css";

export default class Header extends PureComponent {
  render() {
    const { showBackIcon, title } = this.props;
    return (
      <div className="header">
        {showBackIcon ? (
          <div className="back-wrapper">
            <Link to="/">
              <BackIcon /> Back
            </Link>
          </div>
        ) : null}

        <div className="header-title-wrapper">{title}</div>
      </div>
    );
  }
}

Header.propTypes = {
  showBackIcon: PropsType.bool,
  title: PropsType.string
};

Header.defaultProps = {
  showBackIcon: false,
  title: "Header"
};
