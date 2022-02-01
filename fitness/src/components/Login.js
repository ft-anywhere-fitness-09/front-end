import React from "react";

const Login = () => {
  return (
    <div>
      <h1>Log In</h1>
      <div className="form-section">
        <form className="log-in">
          <label>Username: </label>
          <input
            style={{ height: "30px", marginBottom: "10px" }}
            name="username"
            placeholder="Enter Username"
            type="text"
          />
          <br />
          <label>Password: </label>
          <input
            style={{ height: "30px", marginBottom: "5px" }}
            name="password"
            placeholder="Enter Password"
            type="password"
          />
          <br />
          <button
            style={{
              marginLeft: "60px",
              width: "70px",
              height: "30px",
              borderRadius: "4px",
              backgroundColor: "lightblue",
            }}
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
