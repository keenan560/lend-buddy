import { lightBlue } from "@material-ui/core/colors";
import React, { useState } from "react";
import "./Join.css";
import invest from "./invest.jpg";
function Join() {
  const [input, setInput] = useState(null);

  
  return (
    <div className="join__container">
      <form className="join__form">
        <a id="brand" className="font-weight-bold" href="/">
          lend<span id="dollar">$$</span>Buddy
          <small className="tagline">
            <span> Spot a Friend</span>
          </small>
        </a>
        <h1 className="animate__animated animate__pulse">
          Join over <span>100,000+</span> members
        </h1>
        <p>Helping borrowers and lenders connect without the fat cats</p>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
          />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Last Name" />
        </div>
        <div className="form-group">
          <input type="email" className="form-control" placeholder="Email" />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Mobile Number"
          />
        </div>

        {input ? (
          <button
            type="submit"
            className="btn btn-lg btn-success text-white font-weight-bold p-3 mb-1"
          >
            Join
          </button>
        ) : (
          <button
            disabled
            className="btn btn-lg disabled text-white font-weight-bold p-3 mb-1"
          >
            Join
          </button>
        )}
      </form>
      <div className="join__banner shadow"></div>
    </div>
  );
}

export default Join;
