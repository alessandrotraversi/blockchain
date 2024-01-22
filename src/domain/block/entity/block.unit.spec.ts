// TO TEST
import Block from "./block";

// SERVICES
import BlockService from "../service/block.service";

// LIBS
import { faker } from "@faker-js/faker"

describe("Block unit test", () => {
  it("should create a block", () => {
    const block = {
      id: faker.string.uuid(),
      timestamp: faker.date.recent(),
      data: {
        test: faker.string.alphanumeric()
      },
      nonce: BlockService.generateBlockNonce(),
      previousHash: faker.string.alphanumeric(),
      hash: ''
    }

    block.hash = BlockService.generateBlockHash(block);

    const newBlockClass = new Block(block);

    expect(newBlockClass.id).toBe(block.id);
    expect(newBlockClass.timestamp).toBe(block.timestamp);
    expect(newBlockClass.data).toBe(block.data);
    expect(newBlockClass.nonce).toBe(block.nonce);
    expect(newBlockClass.previousHash).toBe(block.previousHash);
    expect(newBlockClass.hash).toBe(block.hash);
  });
})