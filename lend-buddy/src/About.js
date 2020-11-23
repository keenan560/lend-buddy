import React from "react";
import "./About.css";
import mission from "./mission.jpg";
import solution from "./solution.jpg";
import problem from "./problem.jpg";

function About() {
  return (
    <div className="about">
      <div className="about__mission">
        <div className="about__missionText">
          <h1>
            Mi<span>ss</span>ion
          </h1>
          <p>
            To seamlessly connect lenders with borrowers to help meet everyday
            living expenses while increasing lender's return on capital. With
            lend$$buddy everyone wins.
          </p>
        </div>
        <div className="about__missionImg">
          <img className="shadow" src={mission} />
        </div>
      </div>
      <div className="about__story">
        <div className="about__storyImg">
          <img className="shadow-lg" src={problem} />
        </div>
        <div className="about__storyText">
          <h1>
            Prob<span>le</span>m
          </h1>
          <h3>Borrower</h3>
          <p>
            A lot of hard-working people have no one to turn to during financial
            hardships. Consequently, payday lenders, flex loan providers and
            credit card companies exploit this vulnerability in all of us with
            burdensome APRs, late fees, and harassing phone calls. It should
            never be this way.
          </p>
          <h3>Lender</h3>
          <p>
            As a risk averse investor there are not many opportunities available
            to grow your earnings. Bank CDs and traditional savings accounts pay
            you pennies while they loan your money for dollars. As a result,
            your rate of return deflates while the economy inflates.
          </p>
        </div>
      </div>
      <div className="about__solution">
        <div className="about__solutionText">
          <h1>
            Solu<span>ti</span>on
          </h1>
          <p>
            LendBuddy creates a vibrant community where borrowers connect with
            lenders to acheive their financial goals. Set yourself free from the
            exploitative nature of the financial system that we all have fallen
            victim to.
          </p>
        </div>
        <div className="about__solutionImg">
          <img className="shadow" src={solution} />
        </div>
      </div>
    </div>
  );
}

export default About;
