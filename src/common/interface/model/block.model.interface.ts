import type { DateType } from "../../type/date.type";
import type { IdType } from "../../type/id.type";

export default interface BlockModelInterface<T> {
  id: IdType
  timestamp: DateType,
  data: T,
  nonce: number,
  previousHash: string,
  hash: string
}