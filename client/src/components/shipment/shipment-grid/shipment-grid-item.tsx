import React from "react";
import { useNavigate } from "react-router-dom";

import { Shipment } from "../../../common/interface/shipment.interface";
import { useGetShipments } from "../../../hooks/shipments/useGetShipments";

import './shipment-grid.css'

const ShipmentGridItem: React.FC = () => {

    const navigate = useNavigate();

  
  const shipments = useGetShipments();
  

  return (
    <>
      {shipments?.map((shipment: Shipment) => (
        <div className="card" key={shipment.id}>
          <img
            src="https://images.unsplash.com/photo-1536323760109-ca8c07450053"
            alt="Lago di Braies"
          />

          <div className="card__details">
            <div className="name">Freight id: {shipment.id}</div>

            <div className="name">Name: {shipment.name}</div>

            <div className="name">Destination: {shipment.destination}</div>

            <div className="name">Origin: {shipment.origin}</div>

            <button onClick={() => navigate(`/shipment/${shipment.id}`)}>
              View details
            </button>
            <button>
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ShipmentGridItem;


// {shipments?.map((shipment: Shipment) => (
//         <div key={shipment.id}>
//           <p>{shipment.id}</p>
//           <p>{shipment.name}</p>
//           <p>{shipment.cargo.description}</p>
//           <p>{shipment.cargo.type}</p>
//           <p>{shipment.cargo.volume}</p>
//           <p>{shipment.mode}</p>
//           <p>{shipment.type}</p>
//           <p>{shipment.destination}</p>
//           <p>{shipment.origin}</p>
//           <p>{shipment.services.type}</p>
//           <p>{shipment.services.value}</p>
//           <p>{shipment.total}</p>
//           <p>{shipment.status}</p>
//           <p>{shipment.user_id}</p>
//         </div>