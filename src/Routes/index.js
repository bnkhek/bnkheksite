import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import About from "./About";
import Routes from ".";
//import * as serviceWorker from './serviceWorker';
import { HashRouter, Route, Link, Switch } from "react-router-dom";

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

export default () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Page1} />
      <Route exact path="/page2" component={Page2} />
    </Switch>
  </HashRouter>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

//serviceWorker.unregister();
