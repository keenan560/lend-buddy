import { lightBlue } from "@material-ui/core/colors";
import React, { useState } from "react";
import "./Join.css";
import invest from "./invest.jpg";
import { auth } from "./firebase";
function Join() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");

  const addUser = (event) => {
    event.preventDefault();

    alert("Feature not available yet.");
    // auth
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((authUser) => {
    //     return authUser.user.updateProfile({
    //       displayName: email,
    //       firstName: firstName,
    //       lastName: lastName,
    //       mobile: mobile,
    //     });
    //   })
    //   .catch((error) => alert(error.message));
    // setFirstName("");
    // setLastName("");
    // setEmail("");
    // setPassword("");
    // setMobile("");
  };

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
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="team"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>

        {firstName && lastName && email && password && mobile ? (
          <button
            type="submit"
            className="btn btn-lg btn-success text-white font-weight-bold p-3 mb-1"
            onClick={addUser}
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
