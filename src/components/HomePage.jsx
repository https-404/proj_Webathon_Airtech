import React from "react";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import MyMaps from "./GoogleMaps/GoogleMaps"
import {CreatePackage, GetPackages} from "./Packages/package";
import PackageCard from "./Card/Card";

function HomePage() {
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
    };

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
  };

  var [packages, setPackages] = useState([])
  const firePkgs = GetPackages().then((pkgs)=> {
    setPackages(pkgs)
  })

  return (
    <div>
      <button onClick={CreatePackage}>CREATE PACKAGE</button>
      {authUser ? (
        <>
          <button onClick={userSignOut}>Sign Out</button>
          
        </>
      ) : (
        <p>Signed Out</p>
      )}
      {packages.map((pkg)=> 
            <PackageCard name={pkg.name} status={pkg.status} lng={pkg.lng} lat={pkg.lat}/>
          )}
      <button onClick={GetPackages}>LOAD PACKAGES</button>

    </div>
  );
}

export default HomePage;
