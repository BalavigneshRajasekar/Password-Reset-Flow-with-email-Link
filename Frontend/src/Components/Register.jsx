/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import LoadingButton from "@mui/lab/LoadingButton";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import { Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

function Register() {
  const navigate = useNavigate();
  const [btnLoad, setBtnLoad] = useState(false);

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
    setBtnLoad(true);

    try {
      const res = await axios.post(
        "https://password-reset-zylx.onrender.com/register/user",
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

      console.log(res);
    } catch (e) {
      console.log(e);
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
    <div className="">
      <div className="bg-dark">
        <h1 className="text-center">
          <PersonPinIcon
            sx={{ fontSize: "100px", color: "pink" }}
          ></PersonPinIcon>
        </h1>
      </div>
      <div className="container bg-light   rounded-5">
        <div className="d-flex justify-content-between px-5 m-md-5 py-5 py-md-0">
          <h4 className="text-success">Sign UP</h4>
          <Button
            variant="outlined"
            endIcon={<LoginIcon></LoginIcon>}
            onClick={() => navigate("/login")}
          >
            Sign IN
          </Button>
        </div>
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
          <span>
            <LoadingButton loading={btnLoad} variant="contained" type="submit">
              <span>Submit</span>
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
        <p className="text-center pt-5">@2024.All rights Reserved</p>
      </div>
    </div>
  );
}

export default Register;
