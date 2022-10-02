import {
  arrayEmpty,
  arrayOfStrings,
  func1,
  func2,
  number1,
  obj1,
  obj2,
  string1,
  string2,
} from '../../_testUtils'
import {
  isString,
  isStringEqualTo,
  isStringLength,
  isStringMaxLength,
  isStringMinLength,
  mustBeString,
  mustBeStringEqualTo,
  mustBeStringLength,
  mustBeStringMaxLength,
  mustBeStringMinLength,
} from './core'

describe('String validators', () => {
  test('isString() validator', () => {
    expect(isString('')).toBe(true)
    expect(isString('FJDG')).toBe(true)
    expect(isString(undefined)).toBe(false)
    expect(isString(null)).toBe(false)
    expect(isString(0)).toBe(false)
    expect(isString(5)).toBe(false)
    expect(isString(Infinity)).toBe(false)
    expect(isString(obj1)).toBe(false)
    expect(isString(obj2)).toBe(false)
    expect(isString(arrayEmpty)).toBe(false)
    expect(isString(arrayOfStrings)).toBe(false)
    expect(isString(true)).toBe(false)
    expect(isString(false)).toBe(false)
    expect(isString(func1)).toBe(false)
    expect(isString(func2)).toBe(false)
  })

  test('mustBeString() validator', () => {
    expect(mustBeString('')).toBe('')
    expect(mustBeString('FJDG')).toBe('FJDG')
    expect(() => mustBeString(undefined)).toThrowError()
    expect(() => mustBeString(null)).toThrowError()
    expect(() => mustBeString(0)).toThrowError()
    expect(() => mustBeString(5)).toThrowError()
    expect(() => mustBeString(Infinity)).toThrowError()
    expect(() => mustBeString(obj1)).toThrowError()
    expect(() => mustBeString(obj2)).toThrowError()
    expect(() => mustBeString(true)).toThrowError()
    expect(() => mustBeString(false)).toThrowError()
    expect(() => mustBeString(arrayEmpty)).toThrowError()
    expect(() => mustBeString(arrayOfStrings)).toThrowError()
    expect(() => mustBeString(func1)).toThrowError()
    expect(() => mustBeString(func2)).toThrowError()
  })

  test('isStringEqualTo() validator', () => {
    expect(isStringEqualTo(string1, string1)).toBe(true)
    expect(isStringEqualTo(string2, string2)).toBe(true)
    expect(isStringEqualTo(string1, string2)).toBe(false)
    expect(isStringEqualTo(string2, string1)).toBe(false)
    expect(() => isStringEqualTo(string2, number1)).toThrow()
  })

  test('mustBeStringEqualTo() validator', () => {
    expect(mustBeStringEqualTo(string1, string1)).toBe(string1)
    expect(mustBeStringEqualTo(string2, string2)).toBe(string2)
    expect(() => mustBeStringEqualTo(string1, string2)).toThrow()
    expect(() => mustBeStringEqualTo(string2, string1)).toThrow()
    expect(() => mustBeStringEqualTo(string2, number1)).toThrow()
  })

  test('isStringLength() validator', () => {
    expect(isStringLength(string1, 4)).toBe(true)
    expect(isStringLength(string2, 8)).toBe(true)
    expect(isStringLength(string1, 3)).toBe(false)
    expect(isStringLength(string1, Infinity)).toBe(false)
    expect(isStringLength(string2, 12)).toBe(false)
    expect(isStringLength(string2, -Infinity)).toBe(false)
    expect(() => isStringLength(string2, string2)).toThrow()
  })

  test('mustBeStringLength() validator', () => {
    expect(mustBeStringLength(string1, 4)).toBe(string1)
    expect(mustBeStringLength(string2, 8)).toBe(string2)
    expect(() => mustBeStringLength(string1, 3)).toThrow()
    expect(() => mustBeStringLength(string1, Infinity)).toThrow()
    expect(() => mustBeStringLength(string2, 12)).toThrow()
    expect(() => mustBeStringLength(string2, -Infinity)).toThrow()
    expect(() => mustBeStringLength(string2, number1)).toThrow()
  })

  test('isStringMinLength() validator', () => {
    expect(isStringMinLength(string1, 4)).toBe(true)
    expect(isStringMinLength(string1, 2)).toBe(true)
    expect(isStringMinLength(string2, 8)).toBe(true)
    expect(isStringMinLength(string2, -Infinity)).toBe(true)
    expect(isStringMinLength(string1, 5)).toBe(false)
    expect(isStringMinLength(string1, Infinity)).toBe(false)
    expect(isStringMinLength(string2, 12)).toBe(false)
    expect(() => isStringMinLength(string2, string2)).toThrow()
  })

  test('mustBeStringMinLength() validator', () => {
    expect(mustBeStringMinLength(string1, 4)).toBe(string1)
    expect(mustBeStringMinLength(string1, 2)).toBe(string1)
    expect(mustBeStringMinLength(string2, 8)).toBe(string2)
    expect(mustBeStringMinLength(string2, -Infinity)).toBe(string2)
    expect(() => mustBeStringMinLength(string1, 5)).toThrow()
    expect(() => mustBeStringMinLength(string1, Infinity)).toThrow()
    expect(() => mustBeStringMinLength(string2, 12)).toThrow()
    expect(() => mustBeStringMinLength(string2, string2)).toThrow()
  })

  test('isStringMaxLength() validator', () => {
    expect(isStringMaxLength(string1, 4)).toBe(true)
    expect(isStringMaxLength(string1, 6)).toBe(true)
    expect(isStringMaxLength(string1, Infinity)).toBe(true)
    expect(isStringMaxLength(string2, 8)).toBe(true)
    expect(isStringMaxLength(string2, 7)).toBe(false)
    expect(isStringMaxLength(string2, -Infinity)).toBe(false)
    expect(() => isStringMaxLength(string2, string2)).toThrow()
  })

  test('mustBeStringMaxLength() validator', () => {
    expect(mustBeStringMaxLength(string1, 4)).toBe(string1)
    expect(mustBeStringMaxLength(string1, 6)).toBe(string1)
    expect(mustBeStringMaxLength(string1, Infinity)).toBe(string1)
    expect(mustBeStringMaxLength(string2, 8)).toBe(string2)
    expect(() => mustBeStringMaxLength(string2, 7)).toThrow()
    expect(() => mustBeStringMaxLength(string2, -Infinity)).toThrow()
    expect(() => mustBeStringMaxLength(string2, string2)).toThrow()
  })
})
