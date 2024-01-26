import type { IdType } from "../type/id.type";

export default abstract class Entity {
  protected _id: IdType;

  constructor(id: IdType) {
    this._id = id;
  }

  get id(): IdType {
    return this._id;
  }
}