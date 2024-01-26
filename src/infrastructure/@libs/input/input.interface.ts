// TYPES
import type { CLIquestionInputPayloadType, CLIselectInputPayloadType } from './input.types'

export default interface CLIinputInterface {
    makeQuestion: (payload: CLIquestionInputPayloadType) => any
    makeChoose: (payload: CLIselectInputPayloadType) => any
}
