// LIBS
import { v4 as uuid } from 'uuid'

// ENTITY
import Chain from '../entity/chain'

// TYPES
import type ChainInterface from '../entity/chain.interface'

export default class ChainFactory {
  static create (chainData: Pick<Chain, 'name' | 'blocks'>): ChainInterface {
    return new Chain({id: uuid(), ...chainData})
  }
}