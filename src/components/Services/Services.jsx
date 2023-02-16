import React from "react";
import SubHeading from "../../constants/SubHeading";
import "./Services.css";
import { events, weather, gr,flights, servicesside, customization } from "./imports";
const Services = () => {
  return (
    <div className="container-wrapper section__padding" id="services">
      <div className="container-heading flex_center">
        <SubHeading title="CATEGORY" heading="We Offer Best Services" />
      </div>

      <img src={servicesside} className="service-side-image" alt="Services" />

      <div className="container-body flex_center section_padding">
        <div className="first-column">
          <div className="column-img">
            <img src={weather} alt="weather" />
          </div>
          <div className="column-heading flex_center">
            <h2>Calculated Weather</h2>
          </div>
          <div className="column-p flex_center">
            <p>Built Wicket longer admire do barton vanity itself do in it.</p>
          </div>
        </div>

        <div className="second-column">
          <div className="column-img">
            <img src={flights} height={82} width={87} alt="weather" />
          </div>
          <div className="column-heading flex_center">
            <h2>Best Flights</h2>
          </div>
          <div className="column-p flex_center">
            <p>Engrossed listening. Park gate sell they west hard for the.</p>
          </div>
        </div>
        <div className="third-column">
          <div className="column-img">
            <img src={events} alt="events" />
          </div>
          <div className="column-heading flex_center">
            <h2>Local Events</h2>
          </div>
          <div className="column-p flex_center">
            <p>
              Barton vanity itself do in it. Preferd to men it engrossed
              listening.
            </p>
          </div>
        </div>

        <div className="fourth-column">
          <div className="column-img">
            <img src={customization} alt="customization" />
          </div>
          <div className="column-heading flex_center">
            <h2>Customization</h2>
          </div>
          <div className="column-p flex_center">
            <p>
              We deliver outsourced aviation services for military customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
