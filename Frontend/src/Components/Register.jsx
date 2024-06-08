/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const res = await axios.post(
        "http://localhost:3000/register/user",
        formData
      );
      navigate("/login");
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="container">
      <h4 className="m-5 px-5 text-success">Registration form</h4>
      <form onSubmit={handleSubmit} className="form m-md-5 px-5">
        <label htmlFor="name" className="col-form-label">
          Name
        </label>
        <input
          placeholder="johndoe"
          className="form-control"
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, ["name"]: e.target.value })
          }
        />
        <br></br>
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
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
