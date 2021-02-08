import React from "react";
import ReactDOM from "react-dom";
import { HelloWorld } from "./components/HelloWorld.jsx";
import logo from "./assets/webpack.svg";
import data from "./data.json";

ReactDOM.render(
  <HelloWorld name="React" logo={logo} menu={data.links} />,
  document.getElementById("app")
);
