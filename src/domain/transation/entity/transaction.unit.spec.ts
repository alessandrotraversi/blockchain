// TO TEST
import Transaction from "./transaction";

// LIBS
import { faker } from "@faker-js/faker"

describe("Transaction unit test", () => {
  it("should create a transaction", () => {
    const transaction = {
      id: faker.string.uuid(),
      sender: faker.person.fullName(),
      recipient: faker.person.fullName(),
      amount: `${faker.number.float()}`,
    }

    const newTransactionClass = new Transaction(transaction);

    expect(newTransactionClass.id).toBe(transaction.id);
    expect(newTransactionClass.sender).toBe(transaction.sender);
    expect(newTransactionClass.recipient).toBe(transaction.recipient);
    expect(newTransactionClass.amount).toBe(transaction.amount);
  });
})