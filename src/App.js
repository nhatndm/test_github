import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./Page/Main";
import UserDetail from "./Page/UserDetail";
import "./App.css";
import Header from "./Component/Layout/Header";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Main} />
        <Route path="/user/:id?" component={UserDetail} />
      </BrowserRouter>
    );
  }
}
