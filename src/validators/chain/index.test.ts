import { isIt, mustBe } from '.'
import { makeIsArrayChain, makeMustBeArrayChain } from './array'
import { makeIsNumberChain, makeMustBeNumberChain } from './number'
import { makeIsStringChain, makeMustBeStringChain } from './string'

describe('chain validators export', () => {
  describe('isIt chain validators', () => {
    test('isIt.string is makeIsString', () => {
      expect(isIt.string).toBe(makeIsStringChain)
    })
    test('isIt.number is makeIsString', () => {
      expect(isIt.number).toBe(makeIsNumberChain)
    })
    test('isIt.array is makeIsString', () => {
      expect(isIt.array).toBe(makeIsArrayChain)
    })
  })

  describe('mustBe chain validators', () => {
    test('isIt.string is makeIsString', () => {
      expect(mustBe.string).toBe(makeMustBeStringChain)
    })
    test('isIt.number is makeIsString', () => {
      expect(mustBe.number).toBe(makeMustBeNumberChain)
    })
    test('isIt.array is makeIsString', () => {
      expect(mustBe.array).toBe(makeMustBeArrayChain)
    })
  })
})
