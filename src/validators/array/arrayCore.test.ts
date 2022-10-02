import {
  isArray,
  isArrayMaxLength,
  isArrayMinLength,
  mustBeArray,
  mustBeArrayMaxLength,
  mustBeArrayMinLength,
} from './core'
import {
  arrayEmpty,
  arrayOfStrings,
  func1,
  func2,
  obj1,
  obj2,
} from '../../_testUtils/mocks'

describe('Array validators', () => {
  test('isArray() validator', () => {
    expect(isArray('')).toBe(false)
    expect(isArray('FJDG')).toBe(false)
    expect(isArray(undefined)).toBe(false)
    expect(isArray(null)).toBe(false)
    expect(isArray(0)).toBe(false)
    expect(isArray(5)).toBe(false)
    expect(isArray(Infinity)).toBe(false)
    expect(isArray(obj1)).toBe(false)
    expect(isArray(obj2)).toBe(false)
    expect(isArray(arrayEmpty)).toBe(true)
    expect(isArray(arrayOfStrings)).toBe(true)
    expect(isArray(true)).toBe(false)
    expect(isArray(false)).toBe(false)
    expect(isArray(func1)).toBe(false)
    expect(isArray(func2)).toBe(false)
  })

  test('mustBeArray() validator', () => {
    expect(() => mustBeArray('')).toThrow()
    expect(() => mustBeArray('FJDG')).toThrow()
    expect(() => mustBeArray(undefined)).toThrow()
    expect(() => mustBeArray(null)).toThrow()
    expect(() => mustBeArray(0)).toThrow()
    expect(() => mustBeArray(5)).toThrow()
    expect(() => mustBeArray(Infinity)).toThrow()
    expect(() => mustBeArray(obj1)).toThrow()
    expect(() => mustBeArray(obj2)).toThrow()
    expect(mustBeArray(arrayEmpty)).toBe(arrayEmpty)
    expect(mustBeArray(arrayOfStrings)).toBe(arrayOfStrings)
    expect(() => mustBeArray(true)).toThrow()
    expect(() => mustBeArray(false)).toThrow()
    expect(() => mustBeArray(func1)).toThrow()
    expect(() => mustBeArray(func2)).toThrow()
  })

  test('isArrayMinLength() validator', () => {
    expect(() => isArrayMinLength('zsdg', '')).toThrow()
    expect(() => isArrayMinLength([], 'sdg')).toThrow()
    expect(isArrayMinLength([1, 2], 3)).toBe(false)
    expect(isArrayMinLength([1, 2], Infinity)).toBe(false)
    expect(isArrayMinLength([1, 2], -Infinity)).toBe(true)
    expect(isArrayMinLength([1, 2], 2)).toBe(true)
    expect(isArrayMinLength([1, 2], 1)).toBe(true)
  })

  test('mustBeArrayMinLength() validator', () => {
    expect(() => mustBeArrayMinLength('zsdg', '')).toThrow()
    expect(() => mustBeArrayMinLength([], 'sdg')).toThrow()
    expect(() => mustBeArrayMinLength([1, 2], 3)).toThrow()
    expect(() => mustBeArrayMinLength([1, 2], Infinity)).toThrow()
    expect(mustBeArrayMinLength(arrayOfStrings, -Infinity)).toBe(arrayOfStrings)
    expect(mustBeArrayMinLength(arrayOfStrings, arrayOfStrings.length)).toBe(
      arrayOfStrings
    )
    expect(mustBeArrayMinLength(arrayOfStrings, arrayOfStrings.length - 1)).toBe(
      arrayOfStrings
    )
  })

  test('isArrayMaxLength() validator', () => {
    expect(() => isArrayMaxLength('zsdg', '')).toThrow()
    expect(() => isArrayMaxLength([], 'sdg')).toThrow()
    expect(isArrayMaxLength([1, 2], -Infinity)).toBe(false)
    expect(isArrayMaxLength(arrayOfStrings, arrayOfStrings.length - 1)).toBe(false)
    expect(isArrayMaxLength([1, 2], Infinity)).toBe(true)
    expect(isArrayMaxLength(arrayOfStrings, arrayOfStrings.length)).toBe(true)
    expect(isArrayMaxLength(arrayOfStrings, arrayOfStrings.length + 1)).toBe(true)
  })

  test('mustBeArrayMaxLength() validator', () => {
    expect(() => mustBeArrayMaxLength('zsdg', '')).toThrow()
    expect(() => mustBeArrayMaxLength([], 'sdg')).toThrow()
    expect(() => mustBeArrayMaxLength(arrayOfStrings, -Infinity)).toThrow()
    expect(mustBeArrayMaxLength(arrayOfStrings, Infinity)).toBe(arrayOfStrings)
    expect(mustBeArrayMaxLength(arrayOfStrings, arrayOfStrings.length)).toBe(
      arrayOfStrings
    )
    expect(mustBeArrayMaxLength(arrayOfStrings, arrayOfStrings.length + 1)).toBe(
      arrayOfStrings
    )
  })
})
