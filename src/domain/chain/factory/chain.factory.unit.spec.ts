// TO TEST
import ChainFactory from "./chain.factory";

// ENUMS
import { BlockchainNamesEnum } from "../../../common/enum/blockchain.names.enum";

describe("Chain factory unit test", () => {
  it("should create a chain", () => {
    const chain = ChainFactory.create({
      name: BlockchainNamesEnum.TRANSACTION,
      blocks: []
    });

    expect(chain.id).toBeDefined();
    expect(chain.name).toBeDefined();
    expect(chain.blocks).toBeDefined();
  });
});