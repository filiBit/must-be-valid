import {
  arrayEmpty,
  arrayOfStrings,
  func1,
  func2,
  number1,
  number2,
  obj1,
  obj2,
  string1,
} from '../../_testUtils'
import {
  isNumber,
  isNumberEqualTo,
  isNumberEven,
  isNumberFractional,
  isNumberInteger,
  isNumberMax,
  isNumberMin,
  isNumberOdd,
  mustBeNumber,
  mustBeNumberEqualTo,
  mustBeNumberEven,
  mustBeNumberFractional,
  mustBeNumberInteger,
  mustBeNumberMax,
  mustBeNumberMin,
  mustBeNumberOdd,
} from './core'

describe('Numbers validation', () => {
  test('isNumber() validator', () => {
    expect(isNumber('')).toBe(false)
    expect(isNumber('FJDG')).toBe(false)
    expect(isNumber(undefined)).toBe(false)
    expect(isNumber(null)).toBe(false)
    expect(isNumber(0)).toBe(true)
    expect(isNumber(5)).toBe(true)
    expect(isNumber(Infinity)).toBe(true)
    expect(isNumber(obj1)).toBe(false)
    expect(isNumber(obj2)).toBe(false)
    expect(isNumber(arrayEmpty)).toBe(false)
    expect(isNumber(arrayOfStrings)).toBe(false)
    expect(isNumber(true)).toBe(false)
    expect(isNumber(false)).toBe(false)
    expect(isNumber(func1)).toBe(false)
    expect(isNumber(func2)).toBe(false)
  })

  test('mustBeNumber() validator', () => {
    expect(() => mustBeNumber('')).toThrowError()
    expect(() => mustBeNumber('FJDG')).toThrowError()
    expect(() => mustBeNumber(undefined)).toThrowError()
    expect(() => mustBeNumber(null)).toThrowError()
    expect(mustBeNumber(0)).toBe(0)
    expect(mustBeNumber(5)).toBe(5)
    expect(mustBeNumber(Infinity)).toBe(Infinity)
    expect(() => mustBeNumber(obj1)).toThrowError()
    expect(() => mustBeNumber(obj2)).toThrowError()
    expect(() => mustBeNumber(true)).toThrowError()
    expect(() => mustBeNumber(false)).toThrowError()
    expect(() => mustBeNumber(arrayEmpty)).toThrowError()
    expect(() => mustBeNumber(arrayOfStrings)).toThrowError()
    expect(() => mustBeNumber(func1)).toThrowError()
    expect(() => mustBeNumber(func2)).toThrowError()
  })

  test('isNumberEqualTo() validator', () => {
    expect(() => isNumberEqualTo(string1, string1)).toThrow()
    expect(() => isNumberEqualTo(number1, string1)).toThrow()
    expect(() => isNumberEqualTo(string1, number1)).toThrow()
    expect(() => isNumberEqualTo(obj1, number1)).toThrow()
    expect(() => isNumberEqualTo(number1, obj1)).toThrow()
    expect(isNumberEqualTo(number1, number2)).toBe(false)
    expect(isNumberEqualTo(number1, number1)).toBe(true)
    expect(isNumberEqualTo(number2, number2)).toBe(true)
  })

  test('mustBeNumberEqualTo() validator', () => {
    expect(() => mustBeNumberEqualTo(string1, string1)).toThrow()
    expect(() => mustBeNumberEqualTo(number1, string1)).toThrow()
    expect(() => mustBeNumberEqualTo(string1, number1)).toThrow()
    expect(() => mustBeNumberEqualTo(obj1, number1)).toThrow()
    expect(() => mustBeNumberEqualTo(number1, obj1)).toThrow()
    expect(() => mustBeNumberEqualTo(number1, number2)).toThrow()
    expect(mustBeNumberEqualTo(number1, number1)).toBe(number1)
    expect(mustBeNumberEqualTo(number2, number2)).toBe(number2)
  })

  test('isNumberMin() validator', () => {
    expect(() => isNumberMin(string1, string1)).toThrow()
    expect(() => isNumberMin(number1, string1)).toThrow()
    expect(() => isNumberMin(string1, number1)).toThrow()
    expect(() => isNumberMin(obj1, number1)).toThrow()
    expect(() => isNumberMin(number1, obj1)).toThrow()
    expect(isNumberMin(number1, number2)).toBe(false)
    expect(isNumberMin(number1, number1)).toBe(true)
    expect(isNumberMin(number2, number2)).toBe(true)
    expect(isNumberMin(number2, number1)).toBe(true)
  })

  test('mustBeNumberMin() validator', () => {
    expect(() => mustBeNumberMin(string1, string1)).toThrow()
    expect(() => mustBeNumberMin(number1, string1)).toThrow()
    expect(() => mustBeNumberMin(string1, number1)).toThrow()
    expect(() => mustBeNumberMin(obj1, number1)).toThrow()
    expect(() => mustBeNumberMin(number1, obj1)).toThrow()
    expect(() => mustBeNumberMin(number1, number2)).toThrow()
    expect(mustBeNumberMin(number1, number1)).toBe(number1)
    expect(mustBeNumberMin(number2, number2)).toBe(number2)
    expect(mustBeNumberMin(number2, number1)).toBe(number2)
  })

  test('isNumberMax() validator', () => {
    expect(() => isNumberMax(string1, string1)).toThrow()
    expect(() => isNumberMax(number1, string1)).toThrow()
    expect(() => isNumberMax(string1, number1)).toThrow()
    expect(() => isNumberMax(obj1, number1)).toThrow()
    expect(() => isNumberMax(number1, obj1)).toThrow()
    expect(isNumberMax(number2, number1)).toBe(false)
    expect(isNumberMax(number1, number2)).toBe(true)
    expect(isNumberMax(number1, number1)).toBe(true)
    expect(isNumberMax(number2, number2)).toBe(true)
  })

  test('mustBeNumberMax() validator', () => {
    expect(() => mustBeNumberMax(string1, string1)).toThrow()
    expect(() => mustBeNumberMax(number1, string1)).toThrow()
    expect(() => mustBeNumberMax(string1, number1)).toThrow()
    expect(() => mustBeNumberMax(obj1, number1)).toThrow()
    expect(() => mustBeNumberMax(number1, obj1)).toThrow()
    expect(() => mustBeNumberMax(number2, number1)).toThrow()
    expect(mustBeNumberMax(number1, number2)).toBe(number1)
    expect(mustBeNumberMax(number1, number1)).toBe(number1)
    expect(mustBeNumberMax(number2, number2)).toBe(number2)
  })

  test('isNumberEven() validator', () => {
    expect(() => isNumberEven(string1)).toThrow()
    expect(() => isNumberEven(string1)).toThrow()
    expect(() => isNumberEven(obj1)).toThrow()
    expect(isNumberEven(5)).toBe(false)
    expect(isNumberEven(10)).toBe(true)
  })

  test('mustBeNumberEven() validator', () => {
    expect(() => mustBeNumberEven(string1)).toThrow()
    expect(() => mustBeNumberEven(string1)).toThrow()
    expect(() => mustBeNumberEven(obj1)).toThrow()
    expect(() => mustBeNumberEven(number1)).toThrow()
    expect(mustBeNumberEven(number2)).toBe(number2)
  })

  test('isNumberOdd() validator', () => {
    expect(() => isNumberOdd(string1)).toThrow()
    expect(() => isNumberOdd(string1)).toThrow()
    expect(() => isNumberOdd(obj1)).toThrow()
    expect(isNumberOdd(number2)).toBe(false)
    expect(isNumberOdd(number1)).toBe(true)
  })

  test('mustBeNumberOdd() validator', () => {
    expect(() => mustBeNumberOdd(string1)).toThrow()
    expect(() => mustBeNumberOdd(string1)).toThrow()
    expect(() => mustBeNumberOdd(obj1)).toThrow()
    expect(() => mustBeNumberOdd(number2)).toThrow()
    expect(mustBeNumberOdd(number1)).toBe(number1)
  })

  test('isNumberInteger() validator', () => {
    expect(() => isNumberInteger(string1)).toThrow()
    expect(() => isNumberInteger(null)).toThrow()
    expect(isNumberInteger(Infinity)).toBe(false)
    expect(isNumberInteger(0.1)).toBe(false)
    expect(isNumberInteger(5.5)).toBe(false)
    expect(isNumberInteger(0)).toBe(true)
    expect(isNumberInteger(1)).toBe(true)
    expect(isNumberInteger(4)).toBe(true)
  })

  test('mustBeNumberInteger() validator', () => {
    expect(() => mustBeNumberInteger(string1)).toThrow()
    expect(() => mustBeNumberInteger(null)).toThrow()
    expect(() => mustBeNumberInteger(Infinity)).toThrow()
    expect(() => mustBeNumberInteger(0.1)).toThrow()
    expect(() => mustBeNumberInteger(5.5)).toThrow()
    expect(mustBeNumberInteger(0)).toBe(0)
    expect(mustBeNumberInteger(1)).toBe(1)
    expect(mustBeNumberInteger(4)).toBe(4)
  })

  test('isNumberFractional() validator', () => {
    expect(() => isNumberFractional(string1)).toThrow()
    expect(() => isNumberFractional(null)).toThrow()
    expect(isNumberFractional(0)).toBe(false)
    expect(isNumberFractional(4)).toBe(false)
    expect(isNumberFractional(Infinity)).toBe(true)
    expect(isNumberFractional(0.1)).toBe(true)
    expect(isNumberFractional(5.5)).toBe(true)
  })

  test('mustBeNumberFractional() validator', () => {
    expect(() => mustBeNumberFractional(string1)).toThrow()
    expect(() => mustBeNumberFractional(null)).toThrow()
    expect(() => mustBeNumberFractional(0)).toThrow()
    expect(() => mustBeNumberFractional(4)).toThrow()
    expect(mustBeNumberFractional(Infinity)).toBe(Infinity)
    expect(mustBeNumberFractional(0.1)).toBe(0.1)
    expect(mustBeNumberFractional(5.5)).toBe(5.5)
  })
})
