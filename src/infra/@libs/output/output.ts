// MAIN
import winston from "winston";

// LIBS
import dayjs from "dayjs";

export default class CLIoutput {
    static error(arg0: string) {
        throw new Error('Method not implemented.');
    }
    private logger: winston.Logger

    constructor () {
        const { timestamp, printf } = winston.format
        const customFormat = printf(({level, message, label, timestamp}) => {
            const status = `[${level}]`
            const time = `[${dayjs(timestamp).format('DD/MM HH:mm')}]`

            return `${time}${status}: ${message}`
        })

        this.logger = winston.createLogger({
            levels: winston.config.syslog.levels,
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

    public success (message: string) {
        this.logger.info(message)
    }

    public error (message: string) {
        this.logger.error(message)
    }

    public alert (message:string) {
        this.logger.notice(message)
    }
}