/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

function Register() {
  const navigate = useNavigate();
  const [snackBar, setSnackBar] = useState({
    open: false,
    message: "",
    severity: "success",
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal } = snackBar;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://resetpassword-api.onrender.com/register/user",
        formData
      );
      setSnackBar({
        ...snackBar,
        open: true,
        severity: "success",
        message: res.data.message,
      });
      setTimeout(() => {
        navigate("/login");
      }, 4000);

      console.log(res);
    } catch (e) {
      setSnackBar({
        ...snackBar,
        open: true,
        severity: "error",
        message: e.response.data.message,
      });
    }
  };

  const handleClose = () => {
    setSnackBar({ ...snackBar, open: false });
  };
  return (
    <div className="container bg-light py-3 mt-3 rounded-5">
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
        <Snackbar
          open={snackBar.open}
          onClose={handleClose}
          autoHideDuration={3000}
          anchorOrigin={{ vertical, horizontal }}
          key={vertical + horizontal}
        >
          <Alert severity={snackBar.severity}>
            <AlertTitle>{snackBar.severity}</AlertTitle>
            {snackBar.message}
          </Alert>
        </Snackbar>
      </form>
    </div>
  );
}

export default Register;
