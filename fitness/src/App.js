// import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "../src/components/Login";
import ClassForm from "../src/components/ClassForm";
import Header from "../src/components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/class">
          <ClassForm />
        </Route>
        <Route exact path="/signup"></Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
