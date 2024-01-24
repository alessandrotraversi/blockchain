// TYPES
import type RepositoryInterface from "../../../common/interface/domain/repository.interface";
import type ChainInterface from "../entity/chain.interface";

type EntityType = ChainInterface;

export default interface BlockRepositoryInterface extends RepositoryInterface<EntityType> {}