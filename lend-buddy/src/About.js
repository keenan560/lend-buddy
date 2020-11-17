import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="about__mission">
        <div className="about__missionText">
          <h1>
            Mi<span>ss</span>ion
          </h1>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
          </p>
        </div>
        <div className="about__missionImg">
          <img
            className="shadow"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfMFjlD1vZ3aBJvRh7Tb05x9ZdkMsiMiIvCQ&usqp=CAU"
          />
        </div>
      </div>
      <div className="about__story">
        <div className="about__storyImg">
          <img
            className="shadow-lg"
            src="https://www.circonus.com/wp-content/uploads/2015/02/problemMath-1-300x300.png"
          />
        </div>
        <div className="about__storyText">
          <h1>
            Prob<span>le</span>m
          </h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </p>
        </div>
      </div>
      <div className="about__solution">
        <div className="about__solutionText">
          <h1>
            Solu<span>ti</span>on
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Why do we use it? It is
            a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English. Many desktop publishing packages and
            web page editors now use Lorem Ipsum as their default model text,
            and a search for 'lorem ipsum' will uncover many web sites still in
            their infancy. Various versions have evolved over the years,
            sometimes by accident, sometimes on purpose (injected humour and the
            like).
          </p>
        </div>
        <div className="about__solutionImg">
          <img
            className="shadow"
            src="https://webstockreview.net/images/idea-clipart-clip-art-2.png"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
