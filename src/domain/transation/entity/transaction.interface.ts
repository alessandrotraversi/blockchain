import type EntityInterface from "../../../common/interface/domain/entity.interface";
import type TransactionModelInterface from "../../../common/interface/model/transaction.model.interface";

export default interface TransactionInterface extends EntityInterface {
  get sender(): TransactionModelInterface["sender"];
  get recipient(): TransactionModelInterface["recipient"];
  get amount(): TransactionModelInterface["amount"];

  validate(): void;
}