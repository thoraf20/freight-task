import { Field, InputType, ID } from "type-graphql";
import { Shipments } from "../../models/shipment.model";


@InputType()
export class ServiceInput {
  @Field()
  type: string;

  @Field({ nullable: true })
  value: string;
}
@InputType()
export class CargoInput {
  @Field()
  type: string;

  @Field()
  description: string;

  @Field()
  volume: string;
}
@InputType()
export class ShipmentsInput implements Partial<Shipments> {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field()
  name: string;

  @Field((_type) => [CargoInput])
  cargo: CargoInput[];

  @Field()
  mode: string;

  @Field()
  type: string;

  @Field()
  destination: string;

  @Field()
  origin: string;

  @Field((_type) => [ServiceInput])
  services: ServiceInput[];

  @Field()
  total: string;

  @Field()
  status: string;

  @Field()
  user_id: string;
}

@InputType()
export class UpdateShipmentInput {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field()
  name: string;
}