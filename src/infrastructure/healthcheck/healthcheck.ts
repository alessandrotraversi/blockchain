// MODULES
import ServerHealthcheck from "./modules/server.healthcheck";
import DatabaseHealthcheck from "./modules/database.healthcheck";

// ENUMS
import { SystemInfraEnums } from "../../common/enums/system/infra.enums";

// TYPES
import type { HealthCheckDriversType } from "../../common/types/infrastructure/healthcheck.drivers.type";
import type HealthcheckInterface from "./healthcheck.interface";

export default class HealthCheck implements HealthcheckInterface{
  private readonly drivers: HealthCheckDriversType[]
  private readonly timeout: number;

  constructor (payload: {drivers: HealthCheckDriversType[], timeout: number }) {
    const { drivers, timeout } = payload

    this.drivers = drivers ?? [
      SystemInfraEnums.server,
      SystemInfraEnums.database,
    ]

    this.timeout = timeout ?? 2000
  }

  private callback = async (driver: HealthCheckDriversType): Promise<void> => {
    switch (driver) {
      case SystemInfraEnums.server:
        await new ServerHealthcheck().execute();
        return;

      case SystemInfraEnums.database:
        await new DatabaseHealthcheck.execute();
        return;

      default:
        break;
    }
  };

  public async execute(): Promise<void> {
    for (const driver of this.drivers) {
      await new Promise((resolve) => setTimeout(resolve, this.timeout));

      await this.callback(driver);
    }
  }
}