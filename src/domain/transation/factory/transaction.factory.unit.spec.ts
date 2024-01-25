// LIBS
import { faker } from "@faker-js/faker"

// TO TEST
import TransactionFactory from "./transaction.factory";

describe("Transaction factory unit test", () => {
  it("should create a transaction", () => {
    const chain = TransactionFactory.create({
      sender: faker.person.fullName(),
      recipient: faker.person.fullName(),
      amount: `${faker.number.float()}`,
    });

    expect(chain.id).toBeDefined();
    expect(chain.sender).toBeDefined();
    expect(chain.recipient).toBeDefined();
    expect(chain.amount).toBeDefined();
  });
});