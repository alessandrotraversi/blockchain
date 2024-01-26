// LIBS
import * as yup from "yup";

// ABSTRACT
import Validator from "../../../common/abstract/validator.abstract";

// TYPES
import type TransactionInterface from "../entity/transaction.interface";

type EntityType = TransactionInterface;

export default class TransactionValidator extends Validator<EntityType> {
  constructor(entity: EntityType) {
    super({
      context: '[Domain][Transaction] validation',
      entity,
      schema: {
        id: yup.string().required(),
        sender: yup.string().required(),
        recipient: yup.string().required(),
        amount: yup.string().required(),
      }
    });
  }
}