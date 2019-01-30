import React, { Component } from "react";
import Page from "../../components/page";
import Animate from "react-smooth";

import _ from "lodash";

import "./landing.css";

const translations = [
  "bienvenido",
  "welkom",
  "أهلا بك",
  "欢迎",
  "tervetuloa",
  "ようこそ",
  "환영",
  "selamat datang",
  "Ласкаво просимо",
  "bienvenue",
  "स्वागत हे",
  "manaakitia",
  "ยินดีต้อนรับ",
  "welcome"
];

export default class Landing extends Component {
  state = {
    welcome: "welcome",
    counter: 0,
    delay: 400
  };

  render() {
    const { pathname } = this.props.history.location;
    const { welcome } = this.state;
    return (
      <Page path={pathname}>
        <div className="intro">
          <Animate from={{ opacity: 0 }} to={{ opacity: 1 }} easing="ease-in">
            {({ opacity }) => (
              <div style={{ opacity }} className="welcome">
                {" "}
                {welcome}{" "}
              </div>
            )}
          </Animate>
        </div>
      </Page>
    );
  }
}
