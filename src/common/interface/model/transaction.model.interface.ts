// TYPES
import type { IdType } from "../../type/id.type";

export default interface TransactionModelInterface {
  id: IdType
  sender: string
  recipient: string
  amount: string
}
