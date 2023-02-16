import React from 'react'
import { jetstar, axon, expedia, qantas, alitalia } from './imports'
import "./Partners.css";

const Partners = () => {
  return (
    <div className="wrapper section_padding flex_center" id="flights">
      <div className="brands_logo">
        <div>
          <img src={jetstar} alt="logo" />
        </div>
        <div>
          <img src={axon} alt="logo" />
        </div>
        <div className="expedia">
          <img src={expedia} alt="logo" />
        </div>
        <div>
          <img src={qantas} alt="logo" />
        </div>
        <div className="last-image">
          <img src={alitalia} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Partners