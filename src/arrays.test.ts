import { isArray, isArrayOf, mustBeArray, mustBeArrayOf } from './arrays'
import {
  arrayOfUnknowns,
  arrayOfArrays,
  arrayOfnumbers,
  arrayOfStrings,
  func1,
  func2,
  obj1,
  obj2,
} from './mocks'
import { isNumber, isString } from './primitives'

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

  test('isArrayOf() validation', () => {
    expect(isArrayOf('', isString)).toBe(false)
    expect(isArrayOf([], isString)).toBe(false)
    expect(isArrayOf(null, isNumber)).toBe(false)
    expect(isArrayOf(0, isNumber)).toBe(false)
    expect(isArrayOf([''], isString)).toBe(true)
    expect(isArrayOf(arrayOfStrings, isString)).toBe(true)
    expect(isArrayOf(arrayOfnumbers, isNumber)).toBe(true)
    expect(isArrayOf(arrayOfArrays, isArray)).toBe(true)
  })

  test('mustBeArrayOf() validation', () => {
    expect(() => mustBeArrayOf('', isString)).toThrow()
    expect(() => mustBeArrayOf([], isString)).toThrow()
    expect(() => mustBeArrayOf(null, isNumber)).toThrow()
    expect(() => mustBeArrayOf(0, isNumber)).toThrow()
    expect(mustBeArrayOf(arrayOfStrings, isString)).toBe(arrayOfStrings)
    expect(mustBeArrayOf(arrayOfnumbers, isNumber)).toBe(arrayOfnumbers)
    expect(mustBeArrayOf(arrayOfArrays, isArray)).toBe(arrayOfArrays)
  })
})
