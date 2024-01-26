// MAIN
import express from "express";

// NEW RELIC
if (process.env.API_ENVIRONMENT === "production") {
  require("newrelic");
}

// CONFIG
import ExpressConfig from "./express.config";

// LOGGER
import type Logger from "../../libs/logger/logger.interface";
import Log from "../../libs/logger/decorator/logger.decorator";

// ENUMS
import { SystemInfraEnums } from "../../../common/enums/system/infra.enums";

// HEALTHCHECK
import HealthCheck from "../../healthcheck/healthcheck";

@Log({
  context: SystemInfraEnums.server,
})
class Server {
  private readonly express: ExpressConfig;
  private readonly app: express.Application;
  private readonly port: number;
  private readonly logger: Logger;

  constructor() {
    this.express = new ExpressConfig();

    this.app = this.express.app;
    this.port = 3000;

    this.start();
  }

  private start(): void {
    this.app.listen(this.port, async () => {
      await HealthCheck.execute();

      this.logger.info(`running on localhost:${this.port}`);
    });
  }
}

try {
  new Server();
} catch (error) {
  console.error({error})
}