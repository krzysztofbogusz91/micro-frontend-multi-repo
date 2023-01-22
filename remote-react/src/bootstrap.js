import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

class MfElement extends HTMLElement {
  connectedCallback() {
    const props = this["props"];
    ReactDOM.render(<App {...props} />, this);
  }
}

customElements.define("react-element", MfElement);
