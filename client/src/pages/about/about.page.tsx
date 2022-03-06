import React from "react";
import ShipmentDetails from "../../components/shipment/shipment-grid/shipment-details";

import "./about.css";

const About: React.FC = () => {
  return (
    <div className="container">
      <div className="header">
        <h3>Freight Details</h3>
      </div>
    <div className="about">
      <ShipmentDetails />
    </div>
    </div>
  );
};

export default About;
