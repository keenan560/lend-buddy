import React from "react";
import "./Home.css";
import AppleIcon from "@material-ui/icons/Apple";
import google from "./google.png";

function Home() {
  return (
    <div className="home">
      <div className="home__banner animate__animated animate__fadeIn animate__slow">
        <img
          alt="banner"
          src="https://miro.medium.com/max/4510/1*32w_PAiZXUs0pBFnfeH9iA.jpeg"
          className="home__bannerImg shadow-lg"
        />
      </div>
      <div className="home__slogan">
        <h1 className="animate__animated animate__pulse">
          Spot a <span id="friend">Friend</span>
          <span>
            <small id="tm">&trade;</small>
          </span>{" "}
        </h1>
        <p>
          orem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <a
          className="home__join btn btn-lg btn-success text-white font-weight-bold p-3 mb-1"
          href="/join"
        >
          Join Buddy
        </a>
        <div className="home__appLinks">
          <a
            href="/"
            className="btn btn-dark p-2 mr-1 text-white font-weight-bold"
          >
            <small className="">Download on the</small>
            <br></br> <AppleIcon fontSize="large" />
            App Store
          </a>
          <a href="/" className="btn btn-dark p-2 text-white font-weight-bold">
            <small className="">Download on the</small>
            <br></br>
            <img id="google" src={google} />
            Google Play
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
