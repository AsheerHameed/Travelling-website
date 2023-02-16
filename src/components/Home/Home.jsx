import React from "react";
import "./Home.css";
import { plane, line, play, person, side } from "./imports";

const Home = () => {
  return (
    //Parent div
    <div className="home-page-container section_padding">
      {/*side image*/}
      <div className="side-image">
        <img src={side} alt="side" />
      </div>
      {/*left div*/}
      <div className="home-page-left-side">
        <div className="home-page-left-p">
          <h1>Best Destinations around the world</h1>
        </div>
        <div className="home-page-left-head">
          <h1>
            Travel, enjoy
            <br /> and live a new <br />
            and full life
          </h1>
          <img src={line} alt="line" />
        </div>
        <div className="p__font">
          <p>
            Built Wicket longer admire do barton vanity itself do in it.
            <br /> Preferred to sportsmen it engrossed listening. Park gate
            <br />
            sell they west hard for the.
          </p>
        </div>
        <div className="home-page-left-cta">
          <div className="find-out">
            <button type="button">Find out more</button>
          </div>
          <div className="play-button">
            <div className="play-img">
              <img src={play} alt="Play" />
            </div>
          </div>
          <div className="play-demo">
            <div className="play-demo-text">
              <p>Play Demo</p>
            </div>
          </div>
        </div>
      </div>
      {/*right div*/}
      <div className="home-page-right-side">
        <div className="plane1">
          <img src={plane} alt="plane" />
        </div>
        <div className="home-page-right-image">
          <img src={person} alt="person" />
        </div>
        <div className="plane2">
          <img src={plane} alt="plane" />
        </div>
      </div>
    </div>
  );
};

export default Home;
