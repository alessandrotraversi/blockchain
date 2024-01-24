// ENUMS
import { BlockchainNamesEnum } from "../../enum/blockchain.names.enum";

// TYPES
import type{ BlockDataType } from "../../type/block.data.type";
import type { IdType } from "../../type/id.type";
import type BlockModelInterface from "./block.model.interface";

type BlockType = BlockModelInterface<BlockDataType>

export default interface ChainModelInterface {
  id: IdType
  name: BlockchainNamesEnum
  blocks: BlockType[]
}
