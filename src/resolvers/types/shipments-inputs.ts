import { Field, InputType, ID } from "type-graphql";
import { Shipments } from "../../models/shipment.model";

@InputType()
export class ShipmentsInput implements Partial<Shipments> {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field()
  name: string;

  @Field()
  cargo: string;

  @Field()
  mode: string;

  @Field()
  type: string;

  @Field()
  destination: string;

  @Field()
  origin: string;

  @Field()
  services: string;

  @Field()
  total: string;

  @Field()
  status: string;
}
