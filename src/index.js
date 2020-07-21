import React from "react";
import ReactDOM from "react-dom";
import App from "./Routes/App";
import About from "./Routes/About";
import Routes from "./Routes";
import registerServiceWorker from "./registerServiceWorker";
//import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

ReactDOM.render(<Routes />, document.getElementById("root"));
registerServiceWorker();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

//serviceWorker.unregister();
