import React from "react";
import "./Help.css";
import help from "./app-help.svg";

function Help() {
  const accountPic =
    "https://avatars.dicebear.com/api/avataaars/example.svg?top[]=shortHair";

  return (
    <div className="help">
      <h1 className="help__title">
        How can <span>we</span> help <span>you</span>?
      </h1>
      <div className="help__container">
        <div className="help__app">
          <img src={help} className="shadow" />
          <h1>
            A<span>pp</span> Help
          </h1>
          <p>orem Ipsum is simply dummy text industry.</p>
          <p>orem Ipsum is simply dumm industry.</p>
          <p>of the printing and typesetting industry.</p>

          <a
            className=" btn  btn-success text-white font-weight-bold p-3 mb-1"
            href="/help"
          >
            View All
          </a>
        </div>
        <div className="help__account">
          <img src={accountPic} className="shadow" />
          <h1>
            Bu<span>dd</span>y Account
          </h1>
          <p>orem Ipsum is simply dummy text industry.</p>
          <p>orem Ipsum is simply dumm industry.</p>
          <p>of the printing and typesetting industry.</p>
          <a
            className=" btn  btn-success text-white font-weight-bold p-3 mb-1"
            href="/help"
          >
            View All
          </a>
        </div>
      </div>
    </div>
  );
}

export default Help;
