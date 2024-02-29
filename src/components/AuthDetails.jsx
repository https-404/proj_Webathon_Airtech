import React from "react";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import MyMaps from "./GoogleMaps/GoogleMaps"

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in.
                console.log(user);
                setAuthUser(user);
            } else {
                // No user is signed in.
                setAuthUser(null);
                console.log("user is signed out");
            }
        });

        return () => {
            listen();
        }
  
    }, []);

    const userSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("user signed out");
            navigate("/");
        }).catch((error) => {
            // An error happened.
            console.log(error);
        });
    }


  return (
    <div>
    {authUser ? (
      <>
        <p>{`Signed In as ${authUser.email}`}</p>
        <button onClick={userSignOut}>Sign Out</button>
        <MyMaps/>
      </>
    ) : (
      <p>Signed Out</p>
    )}
  </div>
  );
};

export default AuthDetails;
