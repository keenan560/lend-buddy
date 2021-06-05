import React from "react";
import "./Home.css";
import AppleIcon from "@material-ui/icons/Apple";
import google from "./google.png";
import deal from "./deal.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home__banner animate__animated animate__fadeIn animate__slow">
        <img alt="banner" src={deal} className="home__bannerImg shadow-lg" />
      </div>
      <div className="home__slogan">
        <h1 className="animate__animated animate__pulse">
          Spot a <span id="friend">Friend</span>
          <span>
            <small id="tm">&trade;</small>
          </span>{" "}
        </h1>
        <p>
          Our community is strong and rapidly growing. A place where we help
          meet your daily living expenses. As a Borrower with LendBuddy, say
          goodbye to skyrocketing APRs and fees from payday lenders, flex loan
          providers, and Bank Credit cards. As a Lender, earn more interest on
          your money than with a tradtional savings account! Join the community
          and spot a friend!
        </p>
        <a
          className="home__join btn btn-lg btn-success text-white font-weight-bold p-3 mb-1"
          href="/join"
        >
          Join Buddy
        </a>
        <div className="home__appLinks">
          <a
            href="#"
            className="btn btn-dark p-2 mr-1 text-white font-weight-bold"
            onClick={() => alert("Application is under development")}
          >
            <small className="">Download on the</small>
            <br></br> <AppleIcon fontSize="large" />
            App Store
          </a>
          <a
            href="#"
            className="btn btn-dark p-2 text-white font-weight-bold"
            onClick={() => alert("Application is under development")}
          >
            <small className="">Get it on</small>
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
