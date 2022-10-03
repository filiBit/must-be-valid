import { makeIsStringChain, makeMustBeStringChain } from '.'
import { string1, string2 } from '../../../_testUtils'

describe('String chain validators', () => {
  test('isIt.string validator chain', () => {
    expect((() => makeIsStringChain(string1).length(4).result)()).toBe(true)
    expect((() => makeIsStringChain(string1).length(0).result)()).toBe(false)
    expect((() => makeIsStringChain(string1).length(3).result)()).toBe(false)
    expect((() => makeIsStringChain(string1).length(5).result)()).toBe(false)
    expect((() => makeIsStringChain(string1).length(Infinity).result)()).toBe(false)
    expect((() => makeIsStringChain(string1).length(-Infinity).result)()).toBe(false)
    expect(() => makeIsStringChain(string1).length(string1).result).toThrow()

    expect((() => makeIsStringChain(string2).minLength(-Infinity).result)()).toBe(true)
    expect((() => makeIsStringChain(string2).minLength(0).result)()).toBe(true)
    expect((() => makeIsStringChain(string2).minLength(5).result)()).toBe(true)
    expect((() => makeIsStringChain(string2).minLength(8).result)()).toBe(true)
    expect((() => makeIsStringChain(string2).minLength(9).result)()).toBe(false)
    expect((() => makeIsStringChain(string2).minLength(11).result)()).toBe(false)
    expect((() => makeIsStringChain(string2).minLength(Infinity).result)()).toBe(false)
    expect(() => makeIsStringChain(string2).minLength(string2).result).toThrow()

    expect((() => makeIsStringChain(string1).maxLength(4).result)()).toBe(true)
    expect((() => makeIsStringChain(string1).maxLength(5).result)()).toBe(true)
    expect((() => makeIsStringChain(string1).maxLength(9).result)()).toBe(true)
    expect((() => makeIsStringChain(string1).maxLength(Infinity).result)()).toBe(true)
    expect((() => makeIsStringChain(string1).maxLength(2).result)()).toBe(false)
    expect((() => makeIsStringChain(string1).maxLength(-Infinity).result)()).toBe(false)
    expect(() => makeIsStringChain(string1).maxLength(string1).result).toThrow()

    expect((() => makeIsStringChain(string1).minLength(2).maxLength(4).result)()).toBe(
      true
    )
    expect(makeIsStringChain(string1).maxLength(100).minLength(1).length(4).result).toBe(
      true
    )
    expect(makeIsStringChain(string1).minLength(2).maxLength(6).result).toBe(true)
    expect(makeIsStringChain(string1).maxLength(4).minLength(4).result).toBe(true)
    expect(makeIsStringChain(string1).maxLength(5).minLength(6).result).toBe(false)
    expect(makeIsStringChain(string1).length(4).maxLength(0).result).toBe(false)
    expect(() => makeIsStringChain(string1).length(4).maxLength(string1).result).toThrow()
  })

  test('mustBe.string validator chain', () => {
    expect(makeMustBeStringChain(string1).length(4).value).toBe(string1)
    expect(() => makeMustBeStringChain(string1).length(0).value).toThrow()
    expect(() => makeMustBeStringChain(string1).length(3).value).toThrow()
    expect(() => makeMustBeStringChain(string1).length(5).value).toThrow()
    expect(() => makeMustBeStringChain(string1).length(Infinity).value).toThrow()
    expect(() => makeMustBeStringChain(string1).length(-Infinity).value).toThrow()
    expect(() => makeMustBeStringChain(string1).length(string1).value).toThrow()

    expect(makeMustBeStringChain(string1).minLength(-Infinity).value).toBe(string1)
    expect(makeMustBeStringChain(string1).minLength(0).value).toBe(string1)
    expect(makeMustBeStringChain(string1).minLength(3).value).toBe(string1)
    expect(makeMustBeStringChain(string1).minLength(4).value).toBe(string1)
    expect(() => makeMustBeStringChain(string1).minLength(7).value).toThrow()
    expect(() => makeMustBeStringChain(string1).minLength(11).value).toThrow()
    expect(() => makeMustBeStringChain(string1).minLength(Infinity).value).toThrow()
    expect(() => makeMustBeStringChain(string1).minLength(string1).value).toThrow()

    expect(makeMustBeStringChain(string1).maxLength(4).value).toBe(string1)
    expect(makeMustBeStringChain(string1).maxLength(5).value).toBe(string1)
    expect(makeMustBeStringChain(string1).maxLength(9).value).toBe(string1)
    expect(makeMustBeStringChain(string1).maxLength(Infinity).value).toBe(string1)
    expect(() => makeMustBeStringChain(string1).maxLength(-Infinity).value).toThrow()
    expect(() => makeMustBeStringChain(string1).maxLength(2).value).toThrow()
    expect(() => makeMustBeStringChain(string1).maxLength(string1).value).toThrow()

    expect(makeMustBeStringChain(string1).minLength(2).maxLength(4).value).toBe(string1)
    expect(
      makeMustBeStringChain(string1).maxLength(100).minLength(1).length(4).value
    ).toBe(string1)
    expect(makeMustBeStringChain(string1).minLength(2).maxLength(6).value).toBe(string1)
    expect(makeMustBeStringChain(string1).maxLength(4).minLength(4).value).toBe(string1)
    expect(() => makeMustBeStringChain(string1).maxLength(5).minLength(6).value).toThrow()
    expect(() => makeMustBeStringChain(string1).length(4).maxLength(0).value).toThrow()
    expect(
      () => makeMustBeStringChain(string1).length(4).maxLength(string1).value
    ).toThrow()
    expect(
      () => makeMustBeStringChain(string1).length(string1).maxLength(5).value
    ).toThrow()
  })
})
