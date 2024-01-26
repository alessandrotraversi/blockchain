import type RepositoryInterface from "../../../common/interface/domain/repository.interface";
import TransactionModelInterface from "../../../common/interface/model/transaction.model.interface";

type EntityType = TransactionModelInterface;

export default interface TransactionRepositoryInterface extends RepositoryInterface<EntityType>{}