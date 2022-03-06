import { gql, useMutation } from "@apollo/client";

interface CreateShipmentInput {
  variables: {
    input: {
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
    };
  };
}

const CREATE_SHIPMENT = gql`
  mutation CreateShipment($input: CreatePostInput!) {
    createShipment(input: $input) {
      name
      cargo
      mode
      type
      destination
      origin
      services
      total
      status
      user_id
    }
  }
`;

export const useCreateShipment = (): ((
  createShipmentInput: CreateShipmentInput
) => any) => {
  const [createShipment] = useMutation(CREATE_SHIPMENT, {
    update(cache, { data: { createShipment } }) {
      cache.modify({
        fields: {
          shipments(existingShipments = []) {
            const newShipmentRef = cache.writeFragment({
              data: createShipment,
              fragment: gql`
                fragment NewShipment on Shipment {
                  name
                  cargo
                  mode
                  type
                  destination
                  origin
                  services
                  total
                  status
                  user_id
                }
              `,
            });
            return [...existingShipments, newShipmentRef];
          },
        },
      });
    },
  });
  return createShipment;
};

