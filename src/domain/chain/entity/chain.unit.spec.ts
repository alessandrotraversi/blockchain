// TO TEST
import Chain from "./chain";

// ENUMS
import { BlockchainNamesEnum } from "../../../common/enum/blockchain.names.enum";

// LIBS
import { faker } from "@faker-js/faker"

// TYPES
import type ChainModelInterface from "../../../common/interface/model/chain.model.interface";

describe("Chain unit test", () => {
  let chain: ChainModelInterface, 
    chainClass: Chain;

  const newBlock = {
    id: faker.string.uuid(),
    data: {
      message: faker.lorem.sentence(),
      sender: faker.internet.email(),
      receiver: faker.internet.email(),
    },
    nonce: faker.number.int(),
    hash: faker.string.sample(),
    previousHash: faker.string.sample(),
    timestamp: faker.number.int(),
  };

  beforeEach(() => {
    chain = {
      id: faker.string.uuid(),
      name: BlockchainNamesEnum.TRANSACTION,
      blocks: [
        {
          id: faker.string.uuid(),
          data: {
            message: faker.lorem.sentence(),
            sender: faker.internet.email(),
            receiver: faker.internet.email(),
          },
          nonce: faker.number.int(),
          hash: faker.string.sample(),
          previousHash: faker.string.sample(),
          timestamp: faker.number.int(),
        }
      ]
    }

    chainClass = new Chain(chain);
  });

  it("should create a new chain", () => {
    expect(chainClass.id).toBe(chain.id);
    expect(chainClass.name).toBe(chain.name);
    expect(chainClass.blocks).toBe(chain.blocks);
  });

  it("should add one more block", () => {
    chainClass.addBlock(newBlock);

    expect(chainClass.blocks.length).toBe(2);
  });

  it("should get lastest block", () => {
    chainClass.addBlock(newBlock);

    const block = chainClass.getLatestBlock();

    expect(block).toBe(chain.blocks[1]);

    expect(block.id).toBeDefined();
    expect(block.timestamp).toBeDefined();
    expect(block.data).toBeDefined();
    expect(block.nonce).toBeDefined();
    expect(block.previousHash).toBeDefined();
    expect(block.hash).toBeDefined();
    expect(block.data).toBeDefined();
  });
})