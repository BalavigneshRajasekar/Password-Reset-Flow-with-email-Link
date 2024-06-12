/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";

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
    <div>
      <div className="container bg-light py-3 mt-3 rounded-5">
        <h4 className="m-md-5 px-5 py-3 text-success">
          Sign IN <LoginIcon sx={{ fontSize: 50 }}></LoginIcon>
        </h4>
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
        <p className="text-center pt-5">@2024.All rights Reserved</p>
      </div>
    </div>
  );
}

export default Login;
