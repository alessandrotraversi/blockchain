// MAIN
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

// LOGGER
import type Logger from "../logger/logger.interface";
import Log from "../logger/decorator/logger.decorator";

// ENUMS
import { SystemInfraEnums } from "../../../common/enums/system/infra.enums";
import { SystemTagEnums } from "../../../common/enums/system/tag.enums";

// TYPES
import type AxiosClientInterface from "./axios.client.interface";

@Log({
  context: SystemInfraEnums.axios,
})
export default class AxiosClient implements AxiosClientInterface {
  public client: AxiosInstance;
  private readonly logger: Logger;

  constructor(config: AxiosRequestConfig) {
    this.client = axios.create(config);
  }

  public async fetch<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    try {
      const response = await this.client.request<T>(config);
      return response;
    } catch (error: any) {
      if (error.response) {
        this.logger.error(
          `${SystemTagEnums.libs}: Request error. ${error.response.status}`,
        );
      } else if (error.request) {
        this.logger.error(
          `${SystemTagEnums.libs}: No response received. ${error.request}`,
        );
      } else {
        this.logger.error(
          `${SystemTagEnums.libs}: Request setup error. ${error.message}`,
        );
      }
      throw error; // re-throw the error so the caller can handle it
    }
  }
}