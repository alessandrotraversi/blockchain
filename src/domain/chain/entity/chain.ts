// ABSTRACTS
import Entity from "../../../common/abstract/entity.abstract";

// TYPES
import type ChainInterface from "./chain.interface";
import type ChainModelInterface from "../../../common/interface/model/chain.model.interface";
import type BlockModelInterface from "../../../common/interface/model/block.model.interface";
import type { BlockDataType } from "../../../common/type/block.data.type";

type BlockType = BlockModelInterface<BlockDataType>

// VALIDATORS
import ChainCreateValidator from "../validation/chain.create.validator";

export default class Chain extends Entity implements ChainInterface{
  private _name: ChainInterface["name"]
  private _blocks: ChainInterface["blocks"]

  constructor(payload: ChainModelInterface) {
    const { id, name, blocks } = payload;

    super(id);

    this._name = name;
    this._blocks = blocks;

    this.validate();
  }

  get name(): ChainInterface["name"] {
    return this._name;
  }

  get blocks(): ChainInterface["blocks"] {
    return this._blocks;
  }
  
  getLatestBlock(): BlockType {
    return this._blocks[this._blocks.length - 1];
  }

  addBlock(newBlock: BlockType): void{
    this._blocks.push(newBlock);
  }

  validate() {
    let validation

    validation = new ChainCreateValidator(this);
    validation.validate();
  }
}