import React from "react";
import styled from "styled-components";

const Signup = () => {
  const handleSubmit = () => {};
  const handleChange = () => {};
  return (
    <ComponentContainer>
      <ModalContainer>
        <h1>Sign Up for our Classes 💪</h1>
        <h2 style={{ fontWeight: "initial" }}>Fill Out The Information </h2>
        <FormGroup onSubmit={handleSubmit} className="sign-up">
          <div style={{ marginBottom: "5%" }}>
            <label style={{ fontWeight: "bold" }}>Role: </label>
            <select style={{ padding: "0.1em", backgroundColor: "#b1cffa" }}>
              <option value={"client"}>Client</option>
              <option value={"instructor"}>Instructor</option>
            </select>
          </div>
          <Input
            name="email"
            placeholder="Enter email"
            type="email"
            onChange={handleChange}
          />
          <br />
          <br />
          <Input name="Name" placeholder="Enter Name" type="text" />
          <br />
          <br />
          <Input name="Username" placeholder="Enter username" type="text" />
          <br />
          <br />
          <Input
            name="password"
            placeholder="Create Password"
            type="password"
          />
          <br />
          <br />
          <Button type="submit">Sign Up</Button>
          <h4>Already a user? Log in!</h4>
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
