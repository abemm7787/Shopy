import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
var urix = require("urix")

urix("c:\\users\\you\\foo")

const { worker } = require('./mocks/browser');
worker.start();

ReactDOM.render(<App />, document.getElementById("root"));