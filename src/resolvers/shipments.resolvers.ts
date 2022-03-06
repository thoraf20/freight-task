import { Resolver, Mutation, Arg, Query, ID } from "type-graphql";
import { ShipmentsModel, Shipments } from "../models/shipment.model";
import { ShipmentsInput, UpdateShipmentInput } from "./types/shipments-inputs";

@Resolver((_of) => Shipments)
export class ShipmentsResolver {
  @Query(() => [Shipments], {
    name: "allshipments",
    description: "Get a list of all Shipments",
  })
  async getAllShipments() {
    return await ShipmentsModel.find();
  }

  @Query((_returns) => Shipments, {
    nullable: false,
    name: "shipments",
    description: "Get a shipment by id",
  })
  async getShipmentById(@Arg("id") id: string) {
    return await ShipmentsModel.findById({ _id: id });
  }
  @Mutation(() => Shipments, { name: "createShipments" })
  async createShipment(
    @Arg("newShipmentsInput")
    {
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
    }: ShipmentsInput
  ): Promise<Shipments> {
    const shipment = (
      await ShipmentsModel.create({
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
      })
    ).save();

    return shipment;
  }

  @Mutation(() => Shipments, {
    name: "updateShipments",
    description: "Update a shipment name",
  })
  async updateShipments(
    @Arg("editShipmentsInput")
    { id, name }: UpdateShipmentInput
  ): Promise<Shipments> {
    const shipment = await ShipmentsModel.findByIdAndUpdate(
      { _id: id },
      {
        name,
      },
      { new: true }
    );

    return shipment;
  }

  @Mutation(() => String, { name: "deleteShipments" })
  async deleteShipments(@Arg("id") id: string): Promise<String> {
    const result = await ShipmentsModel.deleteOne({ _id: id });

    return "";
  }
}
