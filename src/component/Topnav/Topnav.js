import React, { Component } from "react";
import "./Topnav.css";
import Login from "../Login/Login";
import { Link } from "react-router-dom";

class Topnav extends Component {
  forgotPassword = () => (
    <div className="forgot-password">
      <Link to="/">Forgot my password</Link>
    </div>
  );

  render() {
    return (
      <div>
        <div className="login-container">
          <div>
            <Login />
          </div>
        </div>
        <div className="forgotpassword-container">{this.forgotPassword()}</div>
      </div>
    );
  }
}

export default Topnav;
