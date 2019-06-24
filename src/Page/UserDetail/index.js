import React, { PureComponent, Fragment } from "react";
import Header from "../../Component/Layout/Header";
import axios from "axios";
import CardInformation from "../../Component/CardInformation";

export default class UserDetail extends PureComponent {
  state = {
    user: {}
  };
  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${this.props.match.params.id}`)
      .then(v => {
        this.setState({ user: v.data });
      });
  }

  render() {
    const { user } = this.state;
    return (
      <Fragment>
        <Header showBackIcon title="Person" />
        {Object.keys(user).length > 0 ? <CardInformation data={user} /> : null}
      </Fragment>
    );
  }
}
