/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState } from "react";

function ForgotPassword() {
  const [userMail, setUserMail] = useState();
  const [code, setCode] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/api/resetLink", {
        userMail,
      });
      console.log(response);
      setCode(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCode = (e) => {
    let data = e.target.value;
    if (data.length >= 5) {
      console.log(e.target.value);
    }
  };
  return (
    <div>
      <div className="container">
        <h4 className="m-5 px-5 text-success">Registration form</h4>
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
            Send reset link
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
