import React, { useState } from "react";
import styled from "styled-components";
import axiosWithAuth from "../utils/axiosWithAuth";
// import { useHistory } from "react-router-dom";
// import axios from "axios";

const Signup = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
    role_type: "",
    auth_code: "",
  });

  //   const [message, setMessage] = useState("");

  //   const { push } = useHistory();

  const changeHandler = (e) => {
    // console.log(e.target.value);
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post("/api/auth/clients/register", state)
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log({ err });
      });
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
              onChange={changeHandler}
              style={{ padding: "0.1em", backgroundColor: "#b1cffa" }}
            >
              <option name="client_name" value={"client"}>
                Client
              </option>
              <option name="instructor" value={"instructor"}>
                Instructor
              </option>
            </select>
          </div>
          {/* <Input
            name="email"
            placeholder="Enter email"
            type="email"
            onChange={changeHandler}
          /> */}
          {/* <br /> */}
          {/* <br /> */}

          <br />
          <br />
          <Input
            name="client_name"
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
          {/* <Input
            name="auth_type"
            placeholder="Enter code"
            type="text"
            onChange={changeHandler}
          /> */}
          <Button type="submit">Sign Up</Button>
          <h4>
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
