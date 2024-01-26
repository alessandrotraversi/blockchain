// ORM
import SequelizeClient from "../../database/sequelize/sequelize.client";

// TYPES
import type ModuleHealthcheckInterface from "./module.healthcheck.interface";

export default class DatabaseHealthcheck implements ModuleHealthcheckInterface {
  private readonly database: unknown;

  constructor () {
    this.database = new SequelizeClient() as SequelizeClient
  }

  async execute(): Promise<void> {
    await this.database.authenticate();
    await this.database.sync();
    await this.database.getDetails();
  }
}