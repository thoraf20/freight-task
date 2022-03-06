import { gql, useQuery } from "@apollo/client";
import { Shipment } from "../../common/interface/shipment.interface";

const GET_SHIPMENT_BY_ID = gql`
  query Shipments($id: String!) {
    shipments(id: $id) {
      id
      name
      type
      cargo {
        description
        type
        volume
      }
      mode
      destination
      origin
      services {
        value
        type
      }
      total
      status
      user_id
    }
  }
`;

export const useGetShipmentById = (id: string): Shipment => {
  const { data, error } = useQuery(GET_SHIPMENT_BY_ID, {
    variables: { id },
  });

  console.log(id)

  if (error) {
    console.log(">>>>>", error);
  }

  console.log("hereeeeee",data);

  return data?.shipments;
};
