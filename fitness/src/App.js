import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../src/components/Login";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/"></Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup"></Route>
      </Switch>
    </div>
  );
}

export default App;
