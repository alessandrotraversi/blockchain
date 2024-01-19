// MAIN
import readlineSync from 'readline-sync'

// LOGGER
import logger from '../output/output'

// TYPES
interface I_CLIquestionInputPayload {
    question: string
    errorMessage: string
}

interface I_CLIselectInputPayload {
    question: string
    errorMessage: string
    options: string[]
}

export default class CLIinput {
    private static readonly logger = new logger()
  
    static makeQuestion(payload: I_CLIquestionInputPayload) {
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

    static makeChoose(payload: I_CLIselectInputPayload) {
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
  
