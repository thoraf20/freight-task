import {
  prop as Property,
  getModelForClass,
  modelOptions,
} from "@typegoose/typegoose";
import { Field, ObjectType, ID } from "type-graphql";

@ObjectType()
export class Service {
  @Field()
  type: string;

  @Field({ nullable: true })
  value: string;
}
@ObjectType()
export class Cargo {
  @Field()
  type: string;

  @Field()
  description: String;

  @Field()
  volume: String;
}

@ObjectType({ description: "The Shipmenta Model" })
@modelOptions({ schemaOptions: { collection: "shipments", timestamps: true } })
export class Shipments {
  @Field(() => ID)
  id: string;

  @Field()
  @Property({ type: () => String, required: true })
  name: string;

  @Field(() => [Cargo])
  @Property({ required: true })
  cargo: Cargo[];

  @Field()
  @Property({ type: () => String, required: true })
  mode: string;

  @Field()
  @Property({ type: () => String, required: true })
  type: string;

  @Field()
  @Property({ type: () => String, required: true })
  destination: string;

  @Field()
  @Property({ type: () => String, required: true })
  origin: string;

  @Field(() => [Service])
  @Property({ required: true })
  services: Service[];

  @Field()
  @Property({ type: () => String, required: true })
  total: string;

  @Field()
  @Property({ type: () => String, required: true })
  status: string;

  @Field()
  @Property({ type: () => String, required: true })
  user_id: string;

}

export const ShipmentsModel = getModelForClass(Shipments);
