import React, { Component } from "react";
import Page from "../../components/page";
import "./landing.css";

export default class Landing extends Component {
  render() {
    const { pathname } = this.props.history.location;
    return (
      <Page path={pathname}>
        <div className="shrug"> (◕ᴗ◕✿)</div>
      </Page>
    );
  }
}
