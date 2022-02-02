// import React, { useEffect } from "react";
// import { useHistory } from "react-router-dom";
// import axiosWithAuth from "../utils/axiosWithAuth";

const Logout = () => {
  // const { push } = useHistory();

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
      <h1>You are logged out</h1>
    </div>
  );
};

export default Logout;
