// ABSTRACTS
import Entity from "../../../common/abstract/entity.abstract";

// TYPES
import type BlockModelInterface from "../../../common/interface/model/block.model.interface";
import type BlockInterface from "./block.interface";
import type { BlockDataType } from "../../../common/type/block.data.type";

// VALIDATORS
import BlockValidator from "../validation/block.validator";

export default class Block extends Entity implements BlockInterface<BlockDataType> {
  private _timestamp: BlockInterface<BlockDataType>["timestamp"]
  private _data: BlockInterface<BlockDataType>["data"]
  private _nonce: BlockInterface<BlockDataType>["nonce"]
  private _previousHash: BlockInterface<BlockDataType>["previousHash"]
  private _hash: BlockInterface<BlockDataType>["hash"]

  constructor(payload: BlockModelInterface<BlockDataType>) {
    const { id, timestamp, data, nonce, previousHash, hash } = payload;

    super(id);

    this._timestamp = timestamp;
    this._data = data;
    this._nonce = nonce;
    this._previousHash = previousHash;
    this._hash = hash;

    this.validate();
  }

  get timestamp(): BlockInterface<BlockDataType>["timestamp"] {
    return this._timestamp;
  }
  
  get data(): BlockInterface<BlockDataType>["data"] {
    return this._data;
  }

  get nonce(): BlockInterface<BlockDataType>["nonce"] {
    return this._nonce;
  }

  get previousHash(): BlockInterface<BlockDataType>["previousHash"] {
    return this._previousHash;
  }

  get hash(): BlockInterface<BlockDataType>["hash"] {
    return this._hash;
  }

  validate() {
    let validation

    validation = new BlockValidator(this);
    validation.validate();
  }
}