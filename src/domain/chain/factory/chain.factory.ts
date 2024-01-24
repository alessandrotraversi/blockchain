// LIBS
import { v4 as uuid } from 'uuid'

// ENTITY
import Chain from '../entity/chain'

export default class ChainFactory {
  static create (chainData: Pick<Chain, 'name' | 'blocks'>): Chain {
    return new Chain({id: uuid(), ...chainData})
  }
}