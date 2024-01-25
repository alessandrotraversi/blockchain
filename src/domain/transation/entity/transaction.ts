// ABSTRACT CLASS
import Entity from '../../../common/abstract/entity.abstract';

// TYPES
import type TransactionInterface from './transaction.interface';
import type TransactionModelInterface from '../../../common/interface/model/transaction.model.interface';

// VALIDATORS
import TransactionValidation from '../validation/transaction.validaton';

export default class Transaction extends Entity implements TransactionInterface {
  private readonly _sender: TransactionModelInterface["sender"];
  private readonly _recipient: TransactionModelInterface["recipient"];
  private readonly _amount: TransactionModelInterface["amount"];

  constructor(transaction: TransactionModelInterface) {
    const { id, sender, recipient, amount } = transaction;
    super(id);

    this._sender = sender;
    this._recipient = recipient;
    this._amount = amount;
  }

  get sender(): TransactionModelInterface["sender"] {
    return this._sender;
  }

  get recipient(): TransactionModelInterface["recipient"] {
    return this._recipient;
  }

  get amount(): TransactionModelInterface["amount"] {
    return this._amount;
  }

  validate(): void {
    let validation

    validation = new TransactionValidation(this);
    validation.validate();
  }
}