import { useState } from "react";
import React from "react";
import {auth } from "../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const signup = (e) => {
        //todo: signup logic
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            // Signed in
            console.log(userCredential);
            // ...
        }).catch((error) => {
            console.log(error);
        });
    }


  return (
    <div className="container">
      <h1 className="logo">Project Airtech</h1>
      <form className="form" onSubmit={signup}>
        <h1>Sign Up</h1>
        <h3>Fill following details to Signup</h3>
        <div className="form-group">
          <label >Email or phone number</label>
          <input
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label >Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      
        <button type="submit" className="sign-in-btn" >
          Sign Up
        </button>
        <p className="sign-up">
           Already have an account? <a href="#">Sign in now</a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
