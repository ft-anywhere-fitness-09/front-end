import React, { useState } from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";

const Signup = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
    role_type: "",
  });

  const [message, setMessage] = useState("");

  const { push } = useHistory();

  const changeHandler = (e) => {
    console.log(e.target.value);
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(state);
    if (state.role_type === "client") {
      axiosWithAuth()
        .post("/api/auth/register", state)
        .then((resp) => {
          console.log(resp);
          push("/login");
        })
        .catch((err) => {
          console.log({ err });
          setMessage(err.response.data.message);
        });
    } else if (state.role_type === "instructor") {
      axiosWithAuth()
        .post("/api/auth/register", state)

        .then((resp) => {
          console.log(resp);
          push("/form");
        })
        .catch((err) => {
          console.log({ err });
          setMessage(err.response.data.message);
        });
    } else {
      return alert("error");
    }
  };
  return (
    <ComponentContainer>
      <ModalContainer>
        <h1>Sign Up for our Classes 💪</h1>
        <h2 style={{ fontWeight: "initial" }}>Fill Out The Information </h2>
        <FormGroup onSubmit={submitHandler} className="sign-up">
          <div style={{ marginBottom: "5%" }}>
            <label style={{ fontWeight: "bold" }}>Role: </label>
            <select
              name="role_type"
              onChange={changeHandler}
              style={{ padding: "0.1em", backgroundColor: "#b1cffa" }}
            >
              <option name="role_type" value={"client"}>
                Client
              </option>
              <option name="role_type" value={"instructor"}>
                Instructor
              </option>
            </select>
          </div>

          <br />
          <br />
          <Input
            name="username"
            placeholder="Enter username"
            type="text"
            onChange={changeHandler}
          />
          <br />
          <br />
          <Input
            name="password"
            placeholder="Create Password"
            type="password"
            onChange={changeHandler}
          />
          <br />
          <br />
          <Button type="submit">Sign Up</Button>
          {message && (
            <p style={{ color: "black" }} id="error">
              {message}
            </p>
          )}
          <h4>gi
            Already a user?{" "}
            {
              <a style={{ color: "black" }} href="/login">
                Log in!
              </a>
            }
          </h4>
        </FormGroup>
      </ModalContainer>
    </ComponentContainer>
  );
};
export default Signup;

const ComponentContainer = styled.div`
  height: 70%;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const ModalContainer = styled.div`
  width: 500px;
  background: #ffdb58;
  padding: 2rem;
  text-align: center;
`;

const FormGroup = styled.form`
  padding: 1rem;
`;

const Input = styled.input`
  border: none;
  border-bottom: solid black 3px;
  border-radius: 5px;
  font-size: 1rem;
  padding: 1rem 0;
  width: 100%;
  background-color: #a9cbfa;
`;

const Button = styled.button`
  background-color: #7d98ec;
  border-radius: 5px;
  padding: 1rem;
  width: 100%;
`;
