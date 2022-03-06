import React from "react";
import { useParams } from "react-router-dom";

import { useGetShipmentById } from "../../../hooks/shipments/useGetSingleShipment";

import "./shipment-grid.css";

const ShipmentDetails: React.FC = () => {

  const params  = useParams();

  const id = params.id ? params.id : ''

  const shipments = useGetShipmentById(id);

  return (
    <>
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1536323760109-ca8c07450053"
          alt="Lago di Braies"
        />

        <div className="card__details">
          <div className="name">Freight id: {shipments?.id}</div>

          <div className="name">Name: {shipments?.name}</div>
          <div className="name">Cargo Description: {shipments?.cargo.description}</div>
          <div className="name">Cargo Type: {shipments?.cargo.type}</div>
          <div className="name">Cargo volume: {shipments?.cargo.volume}</div>
          <div className="name">Mode: {shipments?.mode}</div>
          <div className="name">Type: {shipments?.type}</div>
          <div className="name">Servie Type: {shipments?.services.type}</div>
          <div className="name">Service Value: {shipments?.services.value}</div>
          <div className="name">Total: {shipments?.total}</div>
          <div className="name">Status: {shipments?.status}</div>
          <div className="name">Destination: {shipments?.destination}</div>

          <div className="name">Origin: {shipments?.origin}</div>
          <div className="name">User ID: {shipments?.user_id}</div>

          <button>
              Edit
            </button>
        </div>
      </div>
      {/* ))} */}
    </>
  );
};

export default ShipmentDetails;
