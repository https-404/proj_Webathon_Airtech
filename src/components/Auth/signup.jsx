import { useState } from "react";
import React from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {auth  } from "../../firebase"
import { db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { doc , setDoc, collection} from "firebase/firestore"
import HomePage from "../HomePage";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setErrorMessage] = useState("");

  


    const signup = (e) => {
        //todo: signup logic
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            // Signed in
            console.log(userCredential);
            onAuthStateChanged(auth , async (user)=>{
              if(user){
             
                const urole = "Operator";
                const uname = username;
                const usersRef = collection(db, "users")
                await setDoc(doc(usersRef, user.uid),{
                  username : uname,
                  role : urole,
        
                })
                navigate("/Home");
        
              }
              else{
                setErrorMessage("Error in registering Users!!!")
              }
             })
           
           
            // ...
        }).catch((error) => {
            console.log(error);
            setErrorMessage(error.toString())
        });
    }

   


  return (
    <div className="container">
      <h1 className="logo">Project Airtech</h1>
      <form className="form" onSubmit={signup}>
        <h1>Sign Up</h1>
        <h3>Fill following details to Signup</h3>
        <div className="form-group">
          <label >Username</label>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
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
           Already have an account? <a href="/">Sign in now</a>
        </p>
      </form>
      {error && (
    <p className="error"> {error} </p>
    )}
    </div>
  );
};

export default SignUp;
