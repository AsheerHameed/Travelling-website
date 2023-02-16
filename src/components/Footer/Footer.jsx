import React from "react";
import "./Footer.css";
import { GooglePlay, appstore, social } from "./imports";
const Footer = () => {
  const FooterInfo = ({ head, info1, info2, info3 }) => (
    <div className="footer_const">
      <div className="footer_const_head">
        <h2>{head}</h2>
      </div>
      <div className="footer_const_info">
        <div className="footer_const_info1">
          <p>{info1}</p>
        </div>
        <div className="footer_const_info1">
          <p>{info2}</p>
        </div>
        <div className="footer_const_info1">
          <p>{info3}</p>
        </div>
      </div>
    </div>
  );
  return (
    <div className="footer">
      <div className="first_column">
        <h2>Jadoo.</h2>
        <p>
          Book your trip in minute, get full
          <br /> Control for much longer.
        </p>
      </div>
      <div>
        <FooterInfo
          head="Company"
          info1="About"
          info2="Careers"
          info3="Mobile"
        />
      </div>
      <div>
        <FooterInfo
          head="Contact"
          info1="Help/FAQ"
          info2="Press"
          info3="Affilates"
        />
      </div>
      <div>
        <FooterInfo
          head="More"
          info1="Airline fees"
          info2="Airline"
          info3="Low fare tips"
        />
      </div>
      <div className="last_column">
        <div>
          <img src={social} alt="social" />
        </div>
        <div className="last_p">
          <p>Discover our app</p>
        </div>
        <div className="footer_playstore">
          <img src={appstore} alt="appstore" />
          <img src={GooglePlay} alt="GooglePlay" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
