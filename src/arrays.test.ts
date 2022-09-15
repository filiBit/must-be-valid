import { isArray, isNonEmptyArray, mustBeArray, mustBeNonEmptyArray } from './arrays'
import {
  arrayOfArrays,
  arrayOfnumbers,
  arrayOfStrings,
  arrayOfUnknowns,
  func1,
  func2,
  obj1,
  obj2,
} from './mocks'

describe('Array validation', () => {
  test('isArray() validation', () => {
    expect(isArray('')).toBe(false)
    expect(isArray('FJDG')).toBe(false)
    expect(isArray(undefined)).toBe(false)
    expect(isArray(null)).toBe(false)
    expect(isArray(0)).toBe(false)
    expect(isArray(5)).toBe(false)
    expect(isArray(Infinity)).toBe(false)
    expect(isArray(obj1)).toBe(false)
    expect(isArray(obj2)).toBe(false)
    expect(isArray(arrayOfUnknowns)).toBe(true)
    expect(isArray(arrayOfStrings)).toBe(true)
    expect(isArray(true)).toBe(false)
    expect(isArray(false)).toBe(false)
    expect(isArray(func1)).toBe(false)
    expect(isArray(func2)).toBe(false)
  })

  test('mustBeArray() validation', () => {
    expect(() => mustBeArray('')).toThrow()
    expect(() => mustBeArray('FJDG')).toThrow()
    expect(() => mustBeArray(undefined)).toThrow()
    expect(() => mustBeArray(null)).toThrow()
    expect(() => mustBeArray(0)).toThrow()
    expect(() => mustBeArray(5)).toThrow()
    expect(() => mustBeArray(Infinity)).toThrow()
    expect(() => mustBeArray(obj1)).toThrow()
    expect(() => mustBeArray(obj2)).toThrow()
    expect(mustBeArray(arrayOfUnknowns)).toBe(arrayOfUnknowns)
    expect(mustBeArray(arrayOfStrings)).toBe(arrayOfStrings)
    expect(() => mustBeArray(true)).toThrow()
    expect(() => mustBeArray(false)).toThrow()
    expect(() => mustBeArray(func1)).toThrow()
    expect(() => mustBeArray(func2)).toThrow()
  })

  test('isNonEmptyArray() validation', () => {
    expect(isNonEmptyArray('')).toBe(false)
    expect(isNonEmptyArray([])).toBe(false)
    expect(isNonEmptyArray(null)).toBe(false)
    expect(isNonEmptyArray(0)).toBe(false)
    expect(isNonEmptyArray([])).toBe(false)
    expect(isNonEmptyArray(arrayOfStrings)).toBe(true)
    expect(isNonEmptyArray(arrayOfnumbers)).toBe(true)
    expect(isNonEmptyArray(arrayOfArrays)).toBe(true)
  })

  test('mustBeNonEmptyArray() validation', () => {
    expect(() => mustBeNonEmptyArray('')).toThrow()
    expect(() => mustBeNonEmptyArray([])).toThrow()
    expect(() => mustBeNonEmptyArray(null)).toThrow()
    expect(() => mustBeNonEmptyArray(0)).toThrow()
    expect(() => mustBeNonEmptyArray([])).toThrow()
    expect(mustBeNonEmptyArray(arrayOfStrings)).toBe(arrayOfStrings)
    expect(mustBeNonEmptyArray(arrayOfnumbers)).toBe(arrayOfnumbers)
    expect(mustBeNonEmptyArray(arrayOfArrays)).toBe(arrayOfArrays)
  })
})
