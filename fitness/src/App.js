// import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "../src/components/Login";
import Signup from "../src/components/SignUp";
import ClassForm from "../src/components/ClassForm";
import Header from "../src/components/Header";
import HomePage from "../src/components/HomePage";
import SearchClass from "../src/components/SearchClass";
import Layout from "../src/components/Layout";

function App() {
  return (
    <div className="App">
      <Header />
      <Layout>
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
          <Route exact path="/logout"></Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/home">
            <HomePage />
            <Signup />
          </Route>
          <Route exact path="/">
            <HomePage />
            <Signup />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
