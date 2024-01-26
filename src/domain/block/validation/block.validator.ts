// LIBS
import * as yup from "yup";

// ABSTRACT
import Validator from "../../../common/abstract/validator.abstract";

// TYPES
import type { BlockDataType } from "../../../common/type/block.data.type";
import type BlockInterface from "../entity/block.interface";

type EntityType = BlockInterface<BlockDataType>;

export default class BlockValidator extends Validator<EntityType> {
  constructor(entity: EntityType) {
    super({
      context: '[Domain][Block] validation',
      entity,
      schema: {
        id: yup.string().required(),
        timestamp: yup.date().required(),
        data: yup.object().required(),
        nonce: yup.number().required(),
        previousHash: yup.string().required(),
        hash: yup.string().required()
      }
    });
  }
}