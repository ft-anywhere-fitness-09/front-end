import React, { useState } from "react";
import styled from "styled-components";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
const Login = () => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const { push } = useHistory();

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(login);
    axiosWithAuth()
      .post("/api/auth/login", login)
      .then((resp) => {
        console.log(resp);
        localStorage.setItem("token", resp.data.token);
        push("/classes");
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  return (
    <ComponentContainer>
      <ModalContainer>
        {/* <h1>Welcome to Anywhere Fitness 💪</h1> */}
        <h2>Log In </h2>

        <FormGroup onSubmit={handleSubmit} className="log-in">
          <Input
            name="username"
            placeholder="Enter Username"
            type="text"
            onChange={handleChange}
          />
          <br />
          <br />
          <Input
            name="password"
            placeholder="Enter Password"
            type="password"
            onChange={handleChange}
          />
          <br />
          <br />
          <Button type="submit">Log In</Button>
        </FormGroup>
      </ModalContainer>
    </ComponentContainer>
  );
};
export default Login;

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
  background-color: #b1cffa;
  font-size: 1rem;
  padding: 1rem 0;
  width: 100%;
`;

const Button = styled.button`
  background-color: #7d98ec;
  border-radius: 5px;

  padding: 1rem;
  width: 100%;
`;
