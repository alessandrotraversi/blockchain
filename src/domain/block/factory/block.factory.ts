//LIBS
import { v4 as uuid } from 'uuid';
import dayjs from 'dayjs';

// ENTITY
import Block from '../entity/block';

// SERVICES
import BlockService from '../service/block.service';

// TYPES
import type { BlockDataType } from '../../../common/type/block.data.type';
import type BlockModelInterface from '../../../common/interface/model/block.model.interface';

type EntityType = BlockModelInterface<BlockDataType>;

export default class BlockFactory {
  static create(blockData: Pick<EntityType, 'data' | 'previousHash'>): EntityType {
    const newBlock = { 
      id: uuid(), 
      timestamp: dayjs().format(), 
      nonce: BlockService.generateBlockNonce(), 
      ...blockData
    };

    return new Block({ 
      ...newBlock, 
      hash: BlockService.generateBlockHash(newBlock) 
    });
  }
}