import {
  arrayEmpty,
  arrayOfnumbers,
  arrayOfStrings,
  number1,
  string1,
} from '../../../_testUtils'
import { makeIsArrayChain, makeMustBeArrayChain } from '.'

describe('array chain validators', () => {
  test('makeIsArrayChain validator', () => {
    expect(() => makeIsArrayChain(string1).length(string1)).toThrow()
    expect(() => makeIsArrayChain(number1).length(number1)).toThrow()
    expect(() => makeIsArrayChain(arrayOfStrings).length(string1)).toThrow()

    expect(() => makeIsArrayChain(string1).maxLength(1)).toThrow()
    expect(() => makeIsArrayChain(string1).maxLength(string1.length + 1)).toThrow()

    expect(() => makeIsArrayChain(number1).minLength(number1)).toThrow()
    expect(() => makeIsArrayChain(arrayOfStrings).minLength(arrayEmpty)).toThrow()
    expect(() => makeIsArrayChain(arrayOfStrings).minLength(string1)).toThrow()

    expect(makeIsArrayChain(string1).result).toBe(false)
    expect(makeIsArrayChain(number1).result).toBe(false)

    expect(makeIsArrayChain([1, 2]).length(3).maxLength(6).result).toBe(false)
    expect(makeIsArrayChain([1, 2]).maxLength(7).minLength(5).result).toBe(false)
    expect(makeIsArrayChain([1, 2]).minLength(5).length(2).result).toBe(false)

    expect(makeIsArrayChain([1, 2]).length(2).maxLength(6).result).toBe(true)
    expect(makeIsArrayChain([1, 2]).maxLength(7).minLength(1).result).toBe(true)
    expect(makeIsArrayChain([1, 2]).minLength(1).length(2).result).toBe(true)
  })

  test('makeMustBeArrayChain validator', () => {
    expect(() => makeMustBeArrayChain(string1).length(string1)).toThrow()
    expect(() => makeMustBeArrayChain(number1).length(number1)).toThrow()
    expect(() => makeMustBeArrayChain(arrayOfStrings).length(string1)).toThrow()

    expect(() => makeMustBeArrayChain(string1).maxLength(1)).toThrow()
    expect(() => makeMustBeArrayChain(string1).maxLength(string1.length + 1)).toThrow()

    expect(() => makeMustBeArrayChain(number1).minLength(number1)).toThrow()
    expect(() =>
      makeMustBeArrayChain(arrayOfStrings).minLength(arrayOfStrings.length + 1)
    ).toThrow()
    expect(() => makeMustBeArrayChain(arrayOfStrings).minLength(string1)).toThrow()

    expect(() => makeMustBeArrayChain(string1)).toThrow()
    expect(() => makeMustBeArrayChain(number1)).toThrow()

    expect(
      () =>
        makeMustBeArrayChain(arrayOfStrings)
          .length(arrayOfStrings.length - 1)
          .maxLength(6).value
    ).toThrow()
    expect(
      () =>
        makeMustBeArrayChain(arrayOfStrings)
          .maxLength(arrayOfStrings.length)
          .minLength(arrayOfStrings.length + 2).value
    ).toThrow()
    expect(
      () =>
        makeMustBeArrayChain(arrayOfnumbers)
          .minLength(arrayOfnumbers.length + 1)
          .length(2).value
    ).toThrow()

    expect(
      makeMustBeArrayChain(arrayOfStrings)
        .length(arrayOfStrings.length)
        .maxLength(arrayOfStrings.length + 2).value
    ).toBe(arrayOfStrings)
    expect(
      makeMustBeArrayChain(arrayOfStrings)
        .maxLength(arrayOfStrings.length + 1)
        .minLength(arrayOfStrings.length - 1).value
    ).toBe(arrayOfStrings)
    expect(
      makeMustBeArrayChain(arrayOfnumbers)
        .minLength(arrayOfnumbers.length - 1)
        .length(arrayOfnumbers.length).value
    ).toBe(arrayOfnumbers)
  })
})
