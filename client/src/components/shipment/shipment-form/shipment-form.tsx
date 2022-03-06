import React from "react";
import { useForm } from "react-hook-form";
import { useCreateShipment } from "../../../hooks/shipments/useCreateShipment";

import './shipment-form.css'

interface FormData {
  name: string;
  cargo: string;
  mode: string;
  type: string;
  destination: string;
  origin: string;
  services: string;
  total: string;
  status: string;
  user_id: string;
}

const ShipmentsForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const createShipment = useCreateShipment();

  const onSubmit = handleSubmit(
    ({
      name,
      cargo,
      mode,
      type,
      destination,
      origin,
      services,
      total,
      status,
      user_id,
    }) => {
      createShipment({
        variables: {
          input: {
            name,
            cargo,
            mode,
            type,
            destination,
            origin,
            services,
            total,
            status,
            user_id,
          },
        },
      });
    }
  );

  return (
    <div className="shipment-form">
      <form onSubmit={onSubmit}>
        <label>Name</label>
        <input type="text" placeholder="name" {...register("name")} />

        <label>Cargo</label>
        <input type="text" placeholder="cargo" {...register("cargo")} />

        <label>Mode</label>
        <input type="text" placeholder="mode" {...register("mode")} />

        <label>Type</label>
        <input type="text" placeholder="type" {...register("type")} />

        <label>Destination</label>
        <input
          type="text"
          placeholder="destination"
          {...register("destination")}
        />

        <label>Origin</label>
        <input type="text" placeholder="origin" {...register("origin")} />

        <label>Name</label>
        <input type="text" placeholder="services" {...register("services")} />

        <label>Total</label>
        <input type="text" placeholder="total" {...register("total")} />

        <label>Status</label>
        <input type="text" placeholder="status" {...register("status")} />

        <label>services</label>
        <input type="text" placeholder="services" {...register("services")} />

        <label>UserId</label>
        <input type="text" placeholder="user_id" {...register("user_id")} />
        {errors.user_id && <span>This field is required</span>}
        <input type="submit" />
      </form>
    </div>
  );
};

export default ShipmentsForm;
