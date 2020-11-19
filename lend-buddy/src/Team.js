import React from "react";
import "./Team.css";

function Team() {
  const keenan =
    "https://avatars.dicebear.com/api/avataaars/example.svg?options[top][]=eyepatch&options[hairColor][]=black&options[skin][]=darkBrown&options[facialHair][]=light&options[facialHairColor][]=black&options[clothes][]=blazer";

  const yves =
    "https://avatars.dicebear.com/api/avataaars/example.svg?options[top][]=shortHair&options[hairColor][]=black&options[skin][]=darkBrown&options[facialHair][]=majestic&options[facialHairColor][]=black&options[clothes][]=sweater&options[eyes][]=wink&options[clothesColor][]=pastel";
  const shashi =
    " https://avatars.dicebear.com/api/avataaars/example.svg?options[top][]=shortHair&options[hairColor][]=black&options[skin][]=brown&options[facialHair][]=medium&options[facialHairColor][]=red&options[clothes][]=hoodie&options[eyes][]=default&options[clothesColor][]=red&options[mouth][]=smile";
  return (
    <div className="team">
      <div className="team__founding">
        <div className="team__foundingText">
          <h1>
            Our S<span>to</span>ry
          </h1>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC.
          </p>
        </div>
        <div className="team__foundingImg">
          <img
            className="shadow"
            src="https://us.123rf.com/450wm/andrewrybalko/andrewrybalko1804/andrewrybalko180400116/100021318-stock-vector-team-of-successful-businesspeople-conquering-mountain-market-top.jpg?ver=6"
            alt="story"
          />
        </div>
      </div>
      <div className="team__rosterText">
        <h1>
          Team Bu<span>dd</span>y
        </h1>
        <p>Big things come in small packages.</p>
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
        <div className="team__rosterPerson">
          <img src={shashi} />
          <p className="shadow team__title animate__animated animate__fadeInUp animate__faster">
            Shashi <br></br> Co-Founder<br></br>CFO
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
