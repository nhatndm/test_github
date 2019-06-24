import React, { PureComponent, Fragment } from "react";
import Header from "../../Component/Layout/Header";
import Pill from "../../Component/PIll";
import { Link } from "react-router-dom";
import axios from "axios";
import "./index.css";
export default class Main extends PureComponent {
  state = {
    users: []
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users")
      .then(v => this.setState({ users: v.data }));
  }

  render() {
    const { users } = this.state;
    return (
      <Fragment>
        <Header />
        <div className="main">
          <h2>Top 10 Github users</h2>
          <h4>Tap the username to see more informations</h4>
          {users.map((v, i) => {
            return (
              <Link key={i} to={`user/${v.login}`}>
                <Pill name={v.login} />
              </Link>
            );
          })}
        </div>
      </Fragment>
    );
  }
}
