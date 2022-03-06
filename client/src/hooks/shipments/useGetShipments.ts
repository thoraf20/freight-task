import { gql, useQuery } from "@apollo/client";
import { Shipment } from "../../common/interface/shipment.interface";

const GET_SHIPMENTS = gql`
  query GetShipments {
      allshipments {
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


export const useGetShipments = (): Shipment => {
  const { data } = useQuery(GET_SHIPMENTS, {
    // variables: { options: { paginate: { page: 1, limit: 20 } } },
  });

  // console.log(data);

  return data?.allshipments;
};
