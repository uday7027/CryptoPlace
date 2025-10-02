import React from "react";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="interactive-signup-wrapper">
      <div className="interactive-signup-card">
        <h2>Create an Account</h2>
        <form className="interactive-signup-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="interactive-signup-btn">
            Sign Up
          </button>
        </form>
        <p className="interactive-signup-footer">
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
