// import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "../src/components/Login";
import Signup from "../src/components/SignUp";
import ClassForm from "../src/components/ClassForm";
import Header from "../src/components/Header";
import HomePage from "../src/components/HomePage";
import SearchClass from "../src/components/SearchClass";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/search">
          <SearchClass />
        </Route>
        <Route exact path="/class">
          <ClassForm />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <HomePage />
          <Signup />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
