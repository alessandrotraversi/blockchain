// LIBS
import * as yup from "yup";

// ABSTRACT
import Validator from "../../../common/abstract/validator.abstract";

// TYPES
import type ChainInterface from "../entity/chain.interface";

type EntityType = ChainInterface;

export default class ChainCreateValidator extends Validator<EntityType> {
  constructor(entity: EntityType) {
    super({
      context: '[Domain][Chain] validation',
      entity,
      schema: {
        id: yup.string().required(),
        name: yup.string().required(),
        blocks: yup.array().of(yup.object().required())
      }
    });
  }
}