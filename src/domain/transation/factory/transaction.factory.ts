// LIBS
import { v4 as uuid } from 'uuid';

// ENTITY
import Transaction from "../entity/transaction";

// TYPES
import type TransactionInterface from "../entity/transaction.interface";
import type TransactionModelInterface from "../../../common/interface/model/transaction.model.interface";

export default class TransactionFactory {
    static create(transactionData: Omit<TransactionModelInterface, 'id'>): TransactionInterface {
        return new Transaction({id: uuid(), ...transactionData});
    }
}