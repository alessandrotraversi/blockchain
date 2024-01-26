// DOMAIN SERVICE
import FetchService from "../../@libs/axios/axios.client";

// ENUMS
import { SystemInfraEnums } from "../../../common/enums/system/infra.enums";
import { SystemTagEnums } from "../../../common/enums/system/tag.enums";

// LOGGER
import type Logger from "../../@libs/logger/logger.interface";
import Log from "../../@libs/logger/decorator/logger.decorator";

// TYPES
import type ModuleHealthcheckInterface from "./module.healthcheck.interface";

@Log({
  context: SystemInfraEnums.healthcheckServer,
})
export default class ServerHealthcheck implements ModuleHealthcheckInterface {
  private readonly logger: Logger;
  private readonly server = new FetchService({
    baseURL: "http://localhost:3000",
  });

  async execute(): Promise<void> {
    this.logger.info("Server ping");

    try {
      await this.server.fetch({ method: "GET", url: "/health-check" });

      this.logger.success("Server is healthy");

      return;
    } catch (error: any) {
      this.logger.error(
        `${SystemTagEnums.express}: server is unhealthy! ${error.message}`,
      );

      return;
    }
  }
}