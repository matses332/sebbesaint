import React, { Component } from "react";
import AppRouter from "./app.router";
import InformationComponent from "./information.component";
import { Logo } from "./logo.component";
import { Navigation } from "./navigation.component";

export default class Start extends Component {
  render() {
    return (
      <div className="start">
        <Logo />
        <Navigation />
        <AppRouter />
        <InformationComponent />
      </div>
    );
  }
}
