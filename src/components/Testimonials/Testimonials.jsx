import React from "react";
import SubHeading from "../../constants/SubHeading";
import "./Testimonials.css";
import testimonials_image from "../../assets/testimonials_image.png";
const Testimonials = () => {
  return (
    <div className="testimonials_container section_padding flex_center">
      <div className="subHead">
        <SubHeading
          title="Testimonials"
          heading=<div>
            "What people say
            <br />
            about Us."
          </div>
        />
      </div>
      <div className="inner_container">
        <img src={testimonials_image} alt="Testimonials" />
        <p>
          “On the Windows talking painted pasture yet its express parties use.
          Sure last upon he same as knew next. Of believed or diverted no.”
        </p>
        <h2>Mike taylor</h2>
        <p>Bangalore, India</p>
      </div>
    </div>
  );
};

export default Testimonials;
