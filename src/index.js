import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import * as worker from "./service-worker.js";
import "./styles/index.css";
import "antd/dist/antd.css";

ReactDOM.render(<App />, document.getElementById("root"));
worker.register();
