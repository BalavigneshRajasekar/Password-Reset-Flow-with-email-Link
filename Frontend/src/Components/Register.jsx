/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import LoadingButton from "@mui/lab/LoadingButton";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import { Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import "../App.css";

function Register() {
  const navigate = useNavigate();
  const [btnLoad, setBtnLoad] = useState(false); //for loading while submitting

  const [snackBar, setSnackBar] = useState({
    //For alert messages
    open: false,
    message: "",
    severity: "success",
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal } = snackBar;
  //Hold the SignUP details
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBtnLoad(true);
    console.log(formData);
    try {
      const res = await axios.post(
        "https://resetpassword-odxz.onrender.com/register/user",
        formData
      );
      setSnackBar({
        ...snackBar,
        open: true,
        severity: "success",
        message: res.data.message,
      });
      setBtnLoad(false);
      setTimeout(() => {
        navigate("/login");
      }, 4000);
    } catch (e) {
      setSnackBar({
        ...snackBar,
        open: true,
        severity: "error",
        message: e.response.data.message,
      });
      setBtnLoad(false);
    }
  };

  const handleClose = () => {
    setSnackBar({ ...snackBar, open: false });
  };
  return (
    <div className=" d-flex justify-content-between flex-wrap">
      <form className="form " onSubmit={handleSubmit}>
        <p className="title">Register </p>
        <p className="message">Signup now and get full access to our app. </p>

        <label>
          <input
            required=""
            placeholder=""
            type="text"
            className="input"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, ["name"]: e.target.value })
            }
          ></input>
          <span>Name</span>
        </label>

        <label>
          <input
            required=""
            placeholder=""
            type="email"
            className="input"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, ["email"]: e.target.value })
            }
          ></input>
          <span>Email</span>
        </label>

        <label>
          <input
            required=""
            placeholder=""
            type="password"
            className="input"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, ["password"]: e.target.value })
            }
          ></input>
          <span>Password</span>
        </label>

        <LoadingButton
          loading={btnLoad}
          variant="contained"
          className="submit"
          type="submit"
        >
          Submit
        </LoadingButton>
        <p className="signin">
          Already have an acount ? <Link to={"/login"}>Signin</Link>{" "}
        </p>
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
      <div className="">
        <img src="../register.avif" alt="" />
      </div>
    </div>
  );
}

export default Register;
