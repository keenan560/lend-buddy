import React from "react";
import "./Team.css";
import climb from "./climb.png";
import david from "./david.svg";
import team from "./team.jpg";
function Team() {
  const keenan =
    "https://avatars.dicebear.com/api/avataaars/example.svg?options[top][]=eyepatch&options[hairColor][]=black&options[skin][]=darkBrown&options[facialHairChance][]=80&options[facialHairColor][]=black&options[clothes][]=blazer&options[clothesColor][]=black&options[mouth][]=twinkle";

  const yves =
    "https://avatars.dicebear.com/api/avataaars/example.svg?options[topChance][]=1&options[hairColor][]=black&options[skin][]=darkBrown&options[facialHair][]=majestic&options[facialHairColor][]=black&options[clothes][]=shirt&options[eyes][]=default&options[clothesColor][]=blue&options[hatColor][]=black&options[mouth][]=smile";


  const shashi =
    "https://avatars.dicebear.com/api/avataaars/example.svg?options[top][]=hat&options[hairColor][]=black&options[skin][]=brown&options[facialHair][]=medium&options[facialHairColor][]=red&options[clothes][]=sweater&options[eyes][]=happy&options[clothesColor][]=red&options[mouth][]=smile&options[accessoriesChance][]=93";
  return (
    <div className="team">
      <div className="team__founding">
        <div className="team__foundingText">
          <h1>
            Our S<span>to</span>ry
          </h1>
          <p>
            Lendbuddy’s genesis came about while three friends were so fed up
            with the financial system status quo. Rising APRs on credit card,
            untrustworthy payday lenders, flex loan providers for borrowers.
            While the big banks offer very little incentive in saving accounts.
            They re-imagine building the next great financial oasis, in which
            borrowers get fair treatment and lenders get fair incentive to grow
            their capital.
          </p>
        </div>
        <div className="team__foundingImg">
          <img className="shadow" src={team} alt="story" />
        </div>
      </div>
      <div className="team__rosterText">
        <h1>
          Team Bu<span>dd</span>y
        </h1>
        <p>Meet the team that is changing the way we do P2P lending.</p>
      </div>
      <div className="team__roster">
        <div className="team__rosterPerson">
          <img src={yves} />
          <p className="shadow team__title animate__animated animate__fadeInUp animate__faster">
            Yves<br></br>Co-Founder<br></br>CEO
          </p>
        </div>
        <div className="team__rosterPerson">
          <img src={keenan} />
          <p className="shadow team__title animate__animated animate__fadeInUp animate__faster">
            Keenan
            <br></br>
            Co-Founder
            <br></br>CTO
          </p>
        </div>
        {/* <div className="team__rosterPerson">
          <img src={shashi} />
          <p className="shadow team__title animate__animated animate__fadeInUp animate__faster">
            Shashi <br></br> Co-Founder<br></br>CFO
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Team;
