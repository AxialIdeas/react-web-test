import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Login from "./components/Login";


export default function () {
    return (
      <Router>  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact={true} path="/">
              <Login/>
            </Route>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
      </Router>
    );
  }