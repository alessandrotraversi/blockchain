export default interface HealthcheckInterface {
  execute: () => Promise<void> | void
}