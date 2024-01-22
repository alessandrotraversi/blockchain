// TYPES
import type RepositoryInterface from "../../../common/interface/domain/repository.interface";
import type { BlockDataType } from "../../../common/type/block.data.type";
import type BlockInterface from "../entity/block.interface";

type EntityType = BlockInterface<BlockDataType>;

export default interface BlockRepositoryInterface extends RepositoryInterface<EntityType> {}