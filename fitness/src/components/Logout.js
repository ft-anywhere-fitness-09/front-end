import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { useHistory } from "react-router-dom";
// import axiosWithAuth from "../utils/axiosWithAuth";

const Logout = () => {
  //   const { push } = useHistory();

  //   };
  // useEffect(() => {
  //     axiosWithAuth()
  //     .post('/logout')
  //     .then(resp => {
  //         localStorage.removeItem('token')
  //         push('/login');
  //     }).catch(error => {
  //         console.log(error)
  //     })

  // }, [])

  return (
    <div>
      <h1 style={{ marginLeft: "23%" }}>Logged Out</h1>
      <LogoutContainer>
        <h4>Thank you for being part of Anywhere Fitness</h4>
        <Link to="/login">
        <Button >
          {
            <a
              href="/login"
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                color: "black",
              }}
            >
              Log in again
            </a>
          }
        </Button>
        </Link>
        <h3 style={{ marginLeft: "28%", fontWeight: "normal" }}>
          See you Later!
        </h3>
      </LogoutContainer>
    </div>
  );
};

const LogoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Button = styled.button`
  background-color: #7d98ec;
  border-radius: 5px;
  padding: 0.8rem;
  width: 50%;
  margin-left: 20%;
`;

export default Logout;
