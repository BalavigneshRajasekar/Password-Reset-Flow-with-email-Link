/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

function ForgotPassword() {
  const [userMail, setUserMail] = useState();
  const [code, setCode] = useState(false);
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

    try {
      const response = await axios.post("http://localhost:3000/api/resetLink", {
        userMail,
      });
      setSnackBar({
        ...snackBar,
        open: true,
        severity: "success",
        message: response.data.message,
      });

      setCode(true);
    } catch (error) {
      console.log(error);
      setSnackBar({
        ...snackBar,
        open: true,
        severity: "error",
        message: error.response.data.message,
      });
    }
  };

  const handleCode = (e) => {
    let data = e.target.value;
    if (data.length >= 5) {
      console.log(e.target.value);
    }
  };
  const handleClose = () => {
    setSnackBar({ ...snackBar, open: false });
  };
  return (
    <div>
      <div className="container bg-light py-3 mt-3 rounded-5">
        <h4 className="m-5 px-5 text-success">Verification Code</h4>
        <form onSubmit={handleSubmit} className="form m-md-5 px-5">
          <label htmlFor="email" className="col-form-label">
            Email
          </label>
          <input
            placeholder="johndoe@gmail.com"
            className="form-control"
            type="email"
            id="email"
            value={userMail}
            onChange={(e) => setUserMail(e.target.value)}
          />
          <br></br>
          {code && (
            <input
              onChange={handleCode}
              type="text"
              className="form-control"
              placeholder="enter code"
            ></input>
          )}
          <br></br>

          <button className="btn btn-primary" type="submit">
            Send verification code
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
    </div>
  );
}

export default ForgotPassword;
