// MAIN
import winston from "winston";

// LIBS
import dayjs from "dayjs";

export default class CLIoutput {
    private logger: winston.Logger

    constructor () {
        const { timestamp, printf } = winston.format
        const customFormat = printf(({level, message, label, timestamp}) => {
            const status = `[${level
                .replace('info', '- SUCCESS -')
                .replace('help', '- info -')
                .replace('warn', '- warning -')
                .replace('error', '- ERROR -')
                .replace('data', '- verbose -')
            }]`
            const time = `[${dayjs(timestamp).format('HH:mm')}]`

            return `${time}${status}: ${message}`
        })

        this.logger = winston.createLogger({
            levels: winston.config.cli.levels,
            format: winston.format.combine(
                winston.format.colorize(),
                timestamp(),
                customFormat
            ),
            transports: [
                new winston.transports.Console()
            ]
        })
    }

    public info (message: string) {
        this.logger.help(message)
    }

    public success (message: string) {
        this.logger.info(message)
    }

    public error (message: string) {
        this.logger.error(message)
    }

    public warn (message:string) {
        this.logger.warn(message)
    }

    public secondary (message: string) {
        this.logger.data(message)
    }

}