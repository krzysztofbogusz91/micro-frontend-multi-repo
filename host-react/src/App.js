import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "reactMf/react-web-component";
import "angularMf/angular-web-component";
// const RemoteApp = React.lazy(() => import("reactMf/react-web-component"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Host
        </a>
      </header>

      <div>
        REMOTE:
        <react-element></react-element>
        <angular-element></angular-element>
      </div>
    </div>
  );
}

export default App;
