/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Build only for forgot password");
  };
  const callForgotpassword = () => {
    navigate("/forgotPassword");
  };
  return (
    <div className="container">
      <h4 className="m-5 px-5 text-success">Sign IN</h4>
      <form onSubmit={handleSubmit} className="form m-md-5 px-5">
        <label htmlFor="email" className="col-form-label">
          Email
        </label>
        <input
          placeholder="johndoe@gmail.com"
          className="form-control"
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, ["email"]: e.target.value })
          }
        />
        <br></br>
        <label htmlFor="password" className="col-form-label">
          Password
        </label>
        <input
          className="form-control"
          type="password"
          id="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, ["password"]: e.target.value })
          }
        />
        <br></br>
        <div className="d-flex justify-content-between">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
          <span onClick={callForgotpassword}>forgot Password ?</span>
        </div>
      </form>
    </div>
  );
}

export default Login;
