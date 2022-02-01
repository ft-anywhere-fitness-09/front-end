import React from "react";
import styled from "styled-components";

const Login = () => {
  const handleChange = (e) => {};
  const handleSubmit = (e) => {};

  return (
    <ComponentContainer>
      <ModalContainer>
        {/* <h1>Welcome to Anywhere Fitness 💪</h1> */}
        <h2>Log In </h2>

        <FormGroup onSubmit={handleSubmit} className="log-in">
          <Input name="username" placeholder="Enter Username" type="text" />
          <br />
          <br />
          <Input name="password" placeholder="Enter Password" type="password" />
          <br />
          <br />
          <Button>Log In</Button>
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
