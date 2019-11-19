import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import  { Login }  from "./containers/Login/Login";
import React, { Component } from "react";
import Header from "./components/Header/Header";
import State from "./containers/State/State";
import Home from "./containers/Home/Home";
import District from "./containers/District/District";
import Child from "./containers/Child/Child";

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route exact path="/state" component={State} />
          <Route exact path="/district" component={District} />
          <Route exact path="/child" component={Child} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
