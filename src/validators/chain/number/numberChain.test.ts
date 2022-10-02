import { arrayOfStrings, number1, string1 } from '../../../_testUtils'
import { makeIsNumberChain, makeMustBeNumberChain } from '.'

describe('Number chain validators', () => {
  test('makeIsNumberChain validator', () => {
    expect(() => makeIsNumberChain(string1).equalTo(string1)).toThrow()
    expect(() => makeIsNumberChain(string1).equalTo(number1)).toThrow()
    expect(() => makeIsNumberChain(number1).equalTo(string1)).toThrow()
    expect(() => makeIsNumberChain(number1).equalTo(string1)).toThrow()

    expect(() => makeIsNumberChain(string1).even()).toThrow()
    expect(() => makeIsNumberChain(string1).even()).toThrow()

    expect(() => makeIsNumberChain(string1).min(string1)).toThrow()
    expect(() => makeIsNumberChain(string1).min(number1)).toThrow()
    expect(() => makeIsNumberChain(number1).min(string1)).toThrow()
    expect(() => makeIsNumberChain(number1).min(string1)).toThrow()

    expect(() => makeIsNumberChain(string1).max(string1)).toThrow()
    expect(() => makeIsNumberChain(string1).max(number1)).toThrow()
    expect(() => makeIsNumberChain(number1).max(string1)).toThrow()
    expect(() => makeIsNumberChain(number1).max(string1)).toThrow()

    expect(() => makeIsNumberChain(string1).odd()).toThrow()
    expect(() => makeIsNumberChain(string1).odd()).toThrow()

    expect(makeIsNumberChain(string1).result).toBe(false)
    expect(makeIsNumberChain(arrayOfStrings).result).toBe(false)

    expect(makeIsNumberChain(5).equalTo(5).min(6).result).toBe(false)
    expect(makeIsNumberChain(4).even().odd().result).toBe(false)
    expect(makeIsNumberChain(4).max(5).min(5).result).toBe(false)
    expect(makeIsNumberChain(4).min(3).min(5).result).toBe(false)
    expect(makeIsNumberChain(5).odd().equalTo(6).result).toBe(false)

    expect(makeIsNumberChain(5).equalTo(5).min(3).result).toBe(true)
    expect(makeIsNumberChain(4).even().even().result).toBe(true)
    expect(makeIsNumberChain(4).max(5).min(3).result).toBe(true)
    expect(makeIsNumberChain(4).min(4).min(1).result).toBe(true)
    expect(makeIsNumberChain(5).odd().max(10).result).toBe(true)
  })

  test('makeMustBeNumberChain validator', () => {
    expect(() => makeMustBeNumberChain(string1).equalTo(string1)).toThrow()
    expect(() => makeMustBeNumberChain(string1).equalTo(number1)).toThrow()
    expect(() => makeMustBeNumberChain(number1).equalTo(string1)).toThrow()
    expect(() => makeMustBeNumberChain(number1).equalTo(string1)).toThrow()

    expect(() => makeMustBeNumberChain(string1).even()).toThrow()
    expect(() => makeMustBeNumberChain(string1).even()).toThrow()

    expect(() => makeMustBeNumberChain(string1).min(string1)).toThrow()
    expect(() => makeMustBeNumberChain(string1).min(number1)).toThrow()
    expect(() => makeMustBeNumberChain(number1).min(string1)).toThrow()
    expect(() => makeMustBeNumberChain(number1).min(string1)).toThrow()

    expect(() => makeMustBeNumberChain(string1).max(string1)).toThrow()
    expect(() => makeMustBeNumberChain(string1).max(number1)).toThrow()
    expect(() => makeMustBeNumberChain(number1).max(string1)).toThrow()
    expect(() => makeMustBeNumberChain(number1).max(string1)).toThrow()

    expect(() => makeMustBeNumberChain(string1).odd()).toThrow()
    expect(() => makeMustBeNumberChain(string1).odd()).toThrow()

    expect(() => makeMustBeNumberChain(string1)).toThrow()
    expect(() => makeMustBeNumberChain(arrayOfStrings)).toThrow()

    expect(() => makeMustBeNumberChain(5).equalTo(5).min(6)).toThrow()
    expect(() => makeMustBeNumberChain(4).even().odd()).toThrow()
    expect(() => makeMustBeNumberChain(4).max(5).min(5)).toThrow()
    expect(() => makeMustBeNumberChain(4).min(3).min(5)).toThrow()
    expect(() => makeMustBeNumberChain(5).odd().equalTo(6)).toThrow()

    expect(makeMustBeNumberChain(5).equalTo(5).min(3).value).toBe(5)
    expect(makeMustBeNumberChain(4).even().even().value).toBe(4)
    expect(makeMustBeNumberChain(4).max(5).min(3).value).toBe(4)
    expect(makeMustBeNumberChain(4).min(4).min(1).value).toBe(4)
    expect(makeMustBeNumberChain(5).odd().max(10).value).toBe(5)
  })
})
