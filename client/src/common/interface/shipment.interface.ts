type Cargo = {
  type: string
  description: string
  volume: string
}

type Services = {
  type: string
  value: string | '' | null | undefined
}

export interface Shipment {
  [x: string]: any;
  id: string;
  name: string;
  cargo: Cargo;
  mode: string;
  type: string;
  destination: string;
  origin: string;
  services: Services;
  total: string;
  status: string;
  user_id: string;
}
