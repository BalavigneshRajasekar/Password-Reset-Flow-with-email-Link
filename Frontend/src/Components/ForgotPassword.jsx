/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function ForgotPassword() {
  const [formData, setFormData] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
            value={formData}
            onChange={(e) => setFormData(e.target.value)}
          />
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
