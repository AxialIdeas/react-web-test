import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import App from "./App";
import HomeCovid from "./components/HomeCovid";


export default function () {
    return (
      <Router>  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact={true} path="/">
              <App />
            </Route>
            <Route path="/home">
              <HomeCovid />
            </Route>
          </Switch>
      </Router>
    );
  }