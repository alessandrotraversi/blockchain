// MAIN
import express from "express";
import bodyParser from "body-parser";

// SECURITY
import helmet from "helmet";

// PERFORMANCE
import compression from "compression";

// MIDDLEWARE
import SanitizeMiddleware from "./middleware/sanitize.middleware";
import CorsMiddleware from "./middleware/cors.middleware";
import RatelimiterMiddleware from "./middleware/ratelimiter.middleware";

// ROUTES
import RootRoutes from "./routes/root.route.map";
import ApiRoutes from "./routes/api.route.map";

export default class ExpressConfig {
  public readonly app: express.Application;

  constructor() {
    this.app = express();

    this.prepare();
  }

  private prepare(): void {
    // Shared
    this.app.use(express.json());

    this.app.use(
      bodyParser.urlencoded({
        extended: true,
      }),
    );
    this.app.use(bodyParser.json());

    // Security
    this.app.use(helmet());

    // Performance
    this.app.use(compression());

    // Middleware
    this.app.use(SanitizeMiddleware.validateAndSanitize());
    this.app.use(SanitizeMiddleware.checkForErrors);
    this.app.use(CorsMiddleware.handle());
    // this.app.use(RatelimiterMiddleware.handle);

    // Routes
    this.app.use(RootRoutes);
    this.app.use("/api/v1", ApiRoutes);
  }
}