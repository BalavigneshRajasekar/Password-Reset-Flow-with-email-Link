/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Build only for forgot password");
  };

  return (
    <div className="container bg-light py-3 mt-3">
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
          <Link to={"/forgotPassword"}>forgot Password ?</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
