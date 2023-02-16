import React from "react";
import SubHeadingSecond from "../../constants/SubHeadingSecond";
import {
  bookimage,
  booktrip1,
  booktrip2,
  booktrip3,
  send,
  ongoing,
  mapicon,
  leaf,
  building,
  heart,
  indicator,
} from "./imports";

const BookTrip = () => {
  const Info = ({ img, heading, title }) => (
    <div className="left_content">
      <div className="left_content_img">
        <img src={img} alt="" />
      </div>
      <div className="left_content_text">
        <div>
          <h2>{heading}</h2>
        </div>
        <div>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container_wrapper section_padding" id="bookings">
      <div className="left_side">
        <div className="subheadingSecond">
          <SubHeadingSecond
            title="Easy and Fast"
            heading=<div>
              Book your next trip <br />
              in 3 easy steps
            </div>
          />
        </div>
        <div className="features">
          <Info
            img={booktrip1}
            heading="Choose Destination"
            title="Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Urna, tortor tempus. "
          />
          <Info
            img={booktrip2}
            heading="Make Payment"
            title="Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Urna, tortor tempus. "
          />
          <Info
            img={booktrip3}
            heading="Reach Airport on Selected Date"
            title="Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Urna, tortor tempus. "
          />
        </div>
      </div>

      <div className="right_side">
        <div className="right_side_img">
          <img src={bookimage} alt="" />
        </div>
        <div className="right_side_text">
          <div>
            <h2>Trip To Greece</h2>
          </div>
          <div>
            <p>14-29 June | by Robbin joseph</p>
          </div>
          <div className="right_side_icons">
            <img src={leaf} alt="" />
            <img src={mapicon} alt="" />
            <img src={send} alt="" />
          </div>
          <div className="right_side_footer">
            <img src={building} alt="" />
            <p>24 people going</p>
            <img src={heart} className="footer_heart" alt="" />
          </div>
          <div className="ongoing_trip">
            <div className="ongoing_trip_image">
              <div className="rome">
                <img src={ongoing} alt="" />
              </div>
              <div className="ongoing_trip_content">
                <div>
                  <p>Ongoing</p>
                </div>
                <div>
                  <p
                    style={{
                      fontWeight: "600",
                      fontSize: "18px",
                      color: "#000",
                      marginTop: "-1rem",
                    }}
                  >
                    Trip to rome
                  </p>
                </div>
                <div className="ongoing_trip_p">
                  <p style={{ color: "#8A79DF", marginRight: "10px" }}>
                    40%{" "}
                    <span style={{ color: "black", fontWeight: "600" }}>
                      {" "}
                      completed
                    </span>
                  </p>
                </div>
                <div className="indicator">
                  <img src={indicator} alt="completed" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_side_blur"></div>
    </div>
  );
};

export default BookTrip;
