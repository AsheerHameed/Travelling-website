import React from "react";

const SubHeading = ({ title, heading }) => (
  <div style={{ marginBottom: "1rem" }}>
    <p className="p__font">{title}</p>
    <h1 className="head__font">{heading}</h1>
  </div>
);
export default SubHeading;
