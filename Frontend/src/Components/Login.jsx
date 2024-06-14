/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import LoadingButton from "@mui/lab/LoadingButton";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import axios from "axios";

function Login() {
  const [btnLoad, setBtnLoad] = useState(false); //for loading while submitting
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [snackBar, setSnackBar] = useState({
    //For alert messages
    open: false,
    message: "",
    severity: "success",
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal } = snackBar;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setBtnLoad(true);
    try {
      const response = await axios.post(
        "https://resetpassword-odxz.onrender.com/registered/user/login",
        formData
      );
      setSnackBar({
        ...snackBar,
        open: true,
        severity: "success",
        message: response.data.message,
      });
      setBtnLoad(false);
    } catch (err) {
      setSnackBar({
        ...snackBar,
        open: true,
        severity: "error",
        message: err.response.data.message,
      });
      setBtnLoad(false);
    }
  };
  const handleClose = () => {
    setSnackBar({ ...snackBar, open: false });
  };
  return (
    <div className="d-flex gap-md-5 flex-wrap-reverse">
      <div className="">
        <img src="../login.avif" alt="" />
      </div>
      <form className="form w-75 m" onSubmit={handleSubmit}>
        <p className="title">Sign In </p>

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
          don't have an acount ?<Link to={"/"}>SignUp</Link>{" "}
        </p>
        <p className="text-center">
          <Link to={"/forgotPassword"}>forgot Password ?</Link>
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
    </div>
  );
}
export default Login;
