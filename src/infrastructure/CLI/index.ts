import HealthCheck from "../healthcheck/healthcheck"

try {
  const HealthCheckTools = new HealthCheck()

  await HealthCheckTools.execute()
} catch (error) {
  console.error({ error })
}