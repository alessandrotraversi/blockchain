import type BlockModelInterface from "../../../common/interface/model/block.model.interface";

export default interface BlockInterface<T> {
  get timestamp():  BlockModelInterface<T>["timestamp"],
  get data():  BlockModelInterface<T>["data"],
  get nonce():  BlockModelInterface<T>["nonce"],
  get previousHash():  BlockModelInterface<T>["previousHash"],
  get hash():  BlockModelInterface<T>["hash"]

  validate(): void
}