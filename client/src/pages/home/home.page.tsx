import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./home.css";

import ShipmentGridItem from "../../components/shipment/shipment-grid/shipment-grid-item";
import Addshipment from "../../components/modal/addShipment";
const Home: React.FC = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate()

  return (
    <>
      <div className="container">
        <div className="header">
          <h3>Freight Track</h3>
        </div>
        <div>
          <button onClick={() => handleOpen()}>Add Shipment</button>
        </div>
        <div className="home">
          <ShipmentGridItem />
        </div>
      </div>
      <Addshipment open={open} handleClose={handleClose} />
    </>
  );
};

export default Home;
