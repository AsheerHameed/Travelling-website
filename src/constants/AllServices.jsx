import React from "react";
import './AllServices.css';
const AllServices = ({ img, heading, title }) => (
  <div className="container__wrapper">
    <div className="image">
      <img src={img} alt="" />
    </div>
    <div>
      <h1 className="heading">{heading}</h1>
    </div>
    <div>
      <p className="p">{title}</p>
    </div>
  </div>
);
export default AllServices;
