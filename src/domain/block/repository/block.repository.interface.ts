// TYPES
import type RepositoryInterface from "../../../common/interface/domain/repository.interface";
import BlockModelInterface from "../../../common/interface/model/block.model.interface";
import type { BlockDataType } from "../../../common/type/block.data.type";

type EntityType = BlockModelInterface<BlockDataType>;

export default interface BlockRepositoryInterface extends RepositoryInterface<EntityType> {}