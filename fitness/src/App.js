// import "./App.css";
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Login from "../src/components/Login";
import Logout from "./components/Logout";
import Signup from "../src/components/SignUp";
import ClassForm from "../src/components/ClassForm";
import Header from "../src/components/Header";
import HomePage from "../src/components/HomePage";
import SearchClass from "../src/components/SearchClass";
import Layout from "../src/components/Layout";
import EditClassForm from "./components/EditClassForm";
import Class from "./components/Class";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [classes, setClasses] = useState([]);

  return (
    <div className="App">
      <Header />
      <Layout>
        <Switch>
          <Route path="/classes/edit/:class_id">
            <EditClassForm setClasses={setClasses} />
          </Route>
          <Route path="/classes/:class_id">
            <Class setClasses={setClasses} />
          </Route>
          <Route exact path="/classes">
            <SearchClass setClasses={setClasses} />
          </Route>
          <PrivateRoute
            path="/form"
            setClasses={setClasses}
            component={ClassForm}
          />
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/logout">
            <Logout />
          </Route>
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
