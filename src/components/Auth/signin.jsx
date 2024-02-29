import { useState } from "react";
import React from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "../../Styles/signin_style.css";
import {  useNavigate } from "react-router-dom";

const SignIn = () => {
  const move = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signin = (e) => {
    //todo: signin logic
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential);
        move("/Home");
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h1 className="logo">Project Airtech</h1>

      <form className="form" onSubmit={signin}>
        <h1>Sign in</h1>
        <h3>Fill following details to Signin</h3>
        <div className="form-group">
          <label>Email or phone number</label>
          <input
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input type="checkbox" id="remember-me" />
          <label>Remember me</label>
        </div>
        <button type="submit" className="sign-in-btn">
          Sign In
        </button>
        <p className="sign-up">
          New to App? <a href="/signup">Sign up now</a>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
