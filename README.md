# Micro Frontend multi Frameworks configurations with MF

## React Host

We need custom webpack loader implementation for both host and remote in order to pass module federation config.

```
npm i -D babel-loader html-webpack-plugin node-sass sass-loader webpack webpack-cli webpack-dev-server style-loader css-loader svg-url-loader
```

and update package.json to serve the files trough webpack:

```
    "start": "webpack serve",
```

Create webpack.config.js file for both repos with configuration as per repo

Crate index and bootstrap files

## React Remote

In bootsrap.js file create config for web-component

```javascript
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
```

in index.html we switch div id=root inot web component <react-element></react-element>

## Angular Host

Required packages:

```
Dependencies
"@angular-architects/module-federation": "^14.3.14",
"@angular-architects/module-federation-tools": "^14.3.14",

Dev dependencies:
"ngx-build-plus": "^14.0.0",
```

next activate angular architects package:

```
ng g @angular-architects/module-federation:init --project host-angular --port 4206 --type host
```

## Angular Remote

```
Dependencies
"@angular-architects/module-federation": "^14.3.14",
"@angular-architects/module-federation-tools": "^14.3.14",
"@angular/elements": "^14.2.12",
Dev dependencies:
"ngx-build-plus": "^14.0.0",
```

activate:

```
 ng g @angular-architects/module-federation:init --project remote-angular --port 4002 --type remote
```
