// MAIN
import readlineSync from 'readline-sync'

// LOGGER
import type Logger from "../logger/logger.interface";
import Log from "../logger/decorator/logger.decorator";

// ENUMS
import { SystemInfraEnums } from '../../../common/enums/system/infra.enums';

// TYPES
import type { CLIquestionInputPayloadType, CLIselectInputPayloadType } from './input.types'
import type CLIinputInterface from './input.interface';

@Log({
    context: SystemInfraEnums.CLIinput,
  })
export default class CLIinput implements CLIinputInterface {
    private readonly logger: Logger
  
    makeQuestion(payload: CLIquestionInputPayloadType) {
        let input;
        const { question, errorMessage} = payload
      while (input === undefined) {
        const userInput = readlineSync.question(question);
        try {
          input = JSON.parse(userInput);
        } catch {
            this.logger.error(errorMessage)
        }
      }
      return input;
    }

    makeChoose(payload: CLIselectInputPayloadType) {
        const { question, errorMessage, options } = payload
        let input;
        while (input === undefined) {
            const userInput = readlineSync.keyInSelect(options, question);
            try {
                input = options[userInput]
            } catch {
                this.logger.error(errorMessage)
            }
        }
        return input;
    }
}
