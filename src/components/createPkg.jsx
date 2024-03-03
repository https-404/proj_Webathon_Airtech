import React from "react";
import { useState } from "react";
import Form from 'react-bootstrap/Form';

function CreatePkg() {
  return (
    <div className="container">
      <h1 className="logo">Project Airtech</h1>

      <form className="form" >
        <h1>Create Package</h1>
        <h3>Fill following details to Create Package</h3>
        <div className="form-group">
          <label>Package Name</label>
          <input
            type="text"
            placeholder="Enter Pkg Name"
            
          />
        </div>
        <div className="form-group">
          <label>Pkg Longitude</label>
          <input
            type="text"
            placeholder="Enter Longitude"
            
          />
        </div>
        <div className="form-group">
          <label>Enter Latitude</label>
          <input
            type="text"
            placeholder="Enter Latitude"
            
          />
        </div>
        
        
        <button type="submit" className="sign-in-btn">
          Create package
        </button>
       
      </form>
   
    </div>
  );
}

export default CreatePkg;