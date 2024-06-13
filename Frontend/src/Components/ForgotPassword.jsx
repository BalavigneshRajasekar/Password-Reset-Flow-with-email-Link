/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import LoadingButton from "@mui/lab/LoadingButton";
import { Link, useNavigate } from "react-router-dom";
import "./forgotPassword.css";

function ForgotPassword() {
  const [userMail, setUserMail] = useState();
  const navigate = useNavigate();

  const [code, setCode] = useState(false);
  const [btnLoad, setBtnLoad] = useState(false);
  const [snackBar, setSnackBar] = useState({
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
        "https://password-reset-zylx.onrender.com/api1/resetLink",
        {
          userMail,
        }
      );
      setBtnLoad(false);
      setSnackBar({
        ...snackBar,
        open: true,
        severity: "success",
        message: response.data.message,
      });

      setCode(true);
    } catch (error) {
      console.log(error);
      setBtnLoad(false);
      setSnackBar({
        ...snackBar,
        open: true,
        severity: "error",
        message: error.response.data.message,
      });
    }
  };

  const handleCode = async (e) => {
    let code = e.target.value;
    if (code.length >= 5) {
      setBtnLoad(true);
      try {
        const response = await axios.post(
          "https://password-reset-zylx.onrender.com/api/reset/password",
          { code }
        );
        setSnackBar({
          ...snackBar,
          open: true,
          severity: "success",
          message: response.data.message,
        });
        setBtnLoad(false);
        setTimeout(() => {
          navigate("/login");
        }, 4000);
      } catch (err) {
        setSnackBar({
          ...snackBar,
          open: true,
          severity: "error",
          message: err.response.data.message,
        });
        setBtnLoad(false);
      }
    }
  };
  const handleClose = () => {
    setSnackBar({ ...snackBar, open: false });
  };
  return (
    <div className="d-flex justify-content-between align-items-center flex-wrap-reverse gap-5">
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="logo-container">Forgot Password</div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email"
              required=""
              onChange={(e) => setUserMail(e.target.value)}
            ></input>
          </div>
          {code && (
            <div className="form-group">
              <label htmlFor="email">Verification code</label>
              <input
                type="text"
                id="email"
                name="code"
                placeholder="Enter your email"
                required=""
                onChange={handleCode}
              ></input>
            </div>
          )}

          <LoadingButton
            variant="contained"
            loading={btnLoad}
            className="form-submit-btn"
            type="submit"
          >
            Send Email
          </LoadingButton>
          <p className="signup-link">
            Don't have an account?
            <Link to={"/"} className="signup-link link">
              {" "}
              Sign up now
            </Link>
          </p>
        </form>
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
      </div>
      <div>
        <img className="img" src="../otp.jpg"></img>
      </div>
    </div>
  );
}

export default ForgotPassword;
