/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import LoadingButton from "@mui/lab/LoadingButton";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Build only for forgot password");
  };
  const handleClose = () => {
    setSnackBar({ ...snackBar, open: false });
  };
  return (
    <div className="d-flex gap-md-5 flex-wrap-reverse">
      {/* <div className="container bg-light py-3 mt-3 rounded-5">
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
      </div> */}
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
