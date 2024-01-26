import type {AxiosRequestConfig, AxiosResponse } from 'axios'

export default interface AxiosClientInterface {
  fetch: <T>(config: AxiosRequestConfig) => Promise<AxiosResponse<T>>
}