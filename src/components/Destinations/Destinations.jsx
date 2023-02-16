import React from "react";
import SubHeading from "../../constants/SubHeading";
import "./Destination.css";
import {
  Destination1,
  Destination2,
  Destination3,
  navigation,
  decore,
} from "./imports";
const Destinations = () => {
  const Card = ({ img, place, price, trip }) => (
    <div className="card">
      <img src={img} alt="rome" />
      <div className="card-content">
        <div>{place}</div>
        <div>{price}</div>
      </div>
      <div className="card-icons">
        <img src={navigation} alt="navigation" />
        <p>{trip}</p>
      </div>
    </div>
  );
  return (
    <div className="container-wrapping section_padding" id="destination">
      <div className="subheading flex_center">
        <SubHeading title="Top Selling" heading="Top Destinations" />
      </div>
      <div className="place-images">
        <Card
          img={Destination1}
          place="Rome, Italty"
          price="$5.42k"
          trip="10 Days Trip"
        />
        <div className="place-images">
          <Card
            img={Destination2}
            place="London, UK"
            price="$4.2k"
            trip="12 Days Trip"
          />
        </div>

        <div className="place-images">
          <Card
            img={Destination3}
            place="Full Europe"
            price="$15k"
            trip="28 Days Trip"
          />
        </div>

        <div className="decor">
          <img src={decore} alt="decore" />
        </div>
      </div>
    </div>
  );
};

export default Destinations;
