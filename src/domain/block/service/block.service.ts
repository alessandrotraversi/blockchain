// LIBS
import SHA256 from "crypto-js/sha256";
import crypto from "crypto";

//TYPES
import type { BlockDataType } from "../../../common/type/block.data.type";
import type BlockModelInterface from "../../../common/interface/model/block.model.interface";

type EntityType = BlockModelInterface<BlockDataType>;

export default class BlockService {
  static generateBlockHash(entity: Omit<EntityType, 'hash'>): string {
    return SHA256(JSON.stringify(entity)).toString();
  }

  static generateBlockNonce(): number {
    return crypto.randomBytes(4).readUInt32BE();
  }
}