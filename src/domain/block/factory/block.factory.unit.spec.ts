// LIBS
import { faker } from "@faker-js/faker"

// TO TEST
import BlockFactory from "./block.factory";

describe("Block factory unit test", () => {
  it("should create a block", () => {
    const block = BlockFactory.create({
      data: {
        test: faker.string.alphanumeric()
      },
      previousHash: faker.string.alphanumeric(),
    });

    expect(block.id).toBeDefined();
    expect(block.timestamp).toBeDefined();
    expect(block.data).toBeDefined();
    expect(block.nonce).toBeDefined();
    expect(block.previousHash).toBeDefined();
    expect(block.hash).toBeDefined();

    expect(block.data).toHaveProperty('test');    
  });
});