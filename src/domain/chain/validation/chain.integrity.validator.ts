// SERVICES
import BlockService from "../../block/service/block.service";

// TYPES
import type ChainInterface from "../entity/chain.interface";

type EntityType = ChainInterface;

export default class ChainIntegrityValidator {
  private readonly _entity: EntityType;

  constructor(entity: EntityType) {
    this._entity = entity;
  }

  validate() {
    const { blocks } = this._entity;

    for (let i = 1; i < blocks.length; i++) {
      const currentBlock = blocks[i];
      const previousBlock = blocks[i - 1];

      if (currentBlock.hash !== BlockService.generateBlockHash(currentBlock)) {
          return false;
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
          return false;
      }
    }
    
    return true;
  }
}