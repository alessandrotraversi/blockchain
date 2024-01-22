import type { DateType } from "../../../common/type/date.type";
import type { IdType } from "../../../common/type/id.type";

export default interface BlockInterface<T> {
  id: IdType
  timestamp: DateType,
  data: T,
  nonce: number,
  previousHash: string,
  hash: string
}