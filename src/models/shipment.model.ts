import {
  prop as Property,
  getModelForClass,
  modelOptions,
} from "@typegoose/typegoose";
import { Field, ObjectType, ID } from "type-graphql";

@ObjectType({ description: "The Notes Model" })
@modelOptions({ schemaOptions: { collection: "shipments", timestamps: true } })
export class Shipments {
  @Field(() => ID)
  id: string;

  @Field()
  @Property({ type: () => String, required: true })
  name: string;

  @Field()
  @Property({ type: () => String, required: true })
  cargo: string;

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

  @Field()
  @Property({ type: () => String, required: true })
  service: string;

  @Field()
  @Property({ type: () => String, required: true })
  total: string;

  @Field()
  @Property({ type: () => String, required: true })
  status: string;

  @Field()
  @Property({ type: () => String, required: true })
  user_id: string;

  @Field()
  @Property({ required: true, default: Date.now })
  createdAt: Date;

  @Field()
  @Property({ required: true, default: Date.now })
  updatedAt: Date;
}

export const ShipmentsModel = getModelForClass(Shipments);
