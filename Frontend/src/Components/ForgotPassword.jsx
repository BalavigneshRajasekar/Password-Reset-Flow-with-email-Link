/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import LoadingButton from "@mui/lab/LoadingButton";

function ForgotPassword() {
  const [userMail, setUserMail] = useState();

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
        "https://resetpassword-api.onrender.com/api/resetLink",
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
          "https://resetpassword-api.onrender.com/api/reset/password",
          { code }
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

          <span>
            <LoadingButton loading={btnLoad} variant="contained" type="submit">
              <span>Send verification code</span>
            </LoadingButton>
          </span>
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
