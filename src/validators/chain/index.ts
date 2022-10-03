import { makeIsArrayChain, makeMustBeArrayChain } from './array'
import { makeIsNumberChain, makeMustBeNumberChain } from './number'
import { makeIsStringChain, makeMustBeStringChain } from './string'

export const isIt = {
  string: makeIsStringChain,
  number: makeIsNumberChain,
  array: makeIsArrayChain,
}

export const mustBe = {
  string: makeMustBeStringChain,
  number: makeMustBeNumberChain,
  array: makeMustBeArrayChain,
}
