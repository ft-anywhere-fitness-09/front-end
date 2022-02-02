import React, { useState } from "react";
import styled from "styled-components";

const SearchClass = () => {
  const [state, setState] = useState({});

  const handleChange = (event) => {
    // setState({
    //     ...state,
    //     [event.target.name]: event.target.value
    // })
  };

  return (
    <FormGroup>
      <Input
        value={""}
        onChange={(e) => this.handleChange(e)}
        placeholder="Type to search class"
      />
      <br />
      <div>
        <p>Class1 </p>
        <br />
        <p>Class2 </p>
        <br />
        <p>Class3 </p>
        <br />
        <p>Class4 </p>
        <br />
        <p>Class5 </p>
        <br />
        <p>Class6 </p>
      </div>
    </FormGroup>
  );
};
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
export default SearchClass;
