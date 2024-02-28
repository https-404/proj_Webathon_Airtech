import React from "react";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);
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
      </>
    ) : (
      <p>Signed Out</p>
    )}
  </div>
  );
};

export default AuthDetails;
