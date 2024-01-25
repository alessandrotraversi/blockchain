import type{ IdType } from "../../type/id.type";

export default interface EntityInterface {
  get id(): IdType;
}