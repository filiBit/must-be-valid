/**
 * Returns a `boolean` indicating whether `value` is a `number`.
 */
export function isNumber(value: unknown): value is number {
  return typeof value === 'number'
}

/**
 * Returns the `value` if it's a `number`.
 *
 * @throws Will throw an error otherwise.
 */
export function mustBeNumber(value: Parameters<typeof isNumber>[0]): number {
  if (isNumber(value)) return value
  throw new Error('The value must be a number')
}

/**
 * Returns a `boolean` indicating whether `value` is a number that equals `value2`.
 *
 * @throws Will throw an error if either `value` or `value2` is not a number.
 */
export function isNumberEqualTo(
  value: Parameters<typeof mustBeNumber>[0],
  value2: Parameters<typeof mustBeNumber>[0]
): value is number {
  return mustBeNumber(value) === mustBeNumber(value2)
}

/**
 * Returns a `value` if it's a `number` that equals `value2`.
 *
 * @throws Will throw an error otherwise.
 */
export function mustBeNumberEqualTo(
  value: Parameters<typeof isNumberEqualTo>[0],
  value2: Parameters<typeof isNumberEqualTo>[1]
): number {
  if (isNumberEqualTo(value, value2)) return value
  throw new Error(`Number ${value} must be equal to number ${value2}`)
}

/**
 * Returns a `boolean` indicating whether `value` is a `number` equal or greater than `minValue`.
 *
 * @throws Will throw an error if either `value` or `minValue` is not a `number`.
 */
export function isNumberMin(
  value: Parameters<typeof mustBeNumber>[0],
  minValue: Parameters<typeof mustBeNumber>[0]
): value is number {
  return mustBeNumber(value) >= mustBeNumber(minValue)
}

/**
 * Returns the `value` if it's a `number` equal or greater than `minValue`.
 *
 * @throws Will throw an error otherwise.
 */
export function mustBeNumberMin(
  value: Parameters<typeof isNumberMin>[0],
  minValue: Parameters<typeof isNumberMin>[1]
): number {
  if (isNumberMin(value, minValue)) return value
  throw new Error(`Number ${value} must be equal to or greater than number ${minValue}`)
}

/**
 * Returns a `boolean` indicating whether `value` is a `number` equal or smaller than `maxValue`.
 *
 * @throws Will throw an error if either `value` or `maxValue` is not a `number`.
 */
export function isNumberMax(
  value: Parameters<typeof mustBeNumber>[0],
  maxValue: Parameters<typeof mustBeNumber>[0]
): value is number {
  return mustBeNumber(value) <= mustBeNumber(maxValue)
}

/**
 * Returns the `value` if it's a `number` equal or smaller than `maxValue`
 *
 * @throws Will throw an error otherwise.
 */
export function mustBeNumberMax(
  value: Parameters<typeof isNumberMax>[0],
  maxValue: Parameters<typeof isNumberMax>[1]
): number {
  if (isNumberMax(value, maxValue)) return value
  throw new Error(`Number ${value} must be equal to or smaller than number ${maxValue}`)
}

/**
 * Returns a `boolean` indicating whether `value` is an even `number`.
 *
 * @throws Will throw an error if `value` is not a `number`.
 */
export function isNumberEven(value: Parameters<typeof mustBeNumber>[0]): value is number {
  return mustBeNumber(value) % 2 === 0
}

/**
 * Returns the `value` it's an even `number`.
 *
 * @throws Will throw an error otherwise.
 */
export function mustBeNumberEven(value: Parameters<typeof isNumberEven>[0]): number {
  if (isNumberEven(value)) return value
  throw new Error(`Number ${value} must be even`)
}

/**
 * Returns a `boolean` indicating whether `value` is an odd `number`.
 *
 * @throws Will throw an error if `value` is not a `number`.
 */
export function isNumberOdd(value: Parameters<typeof mustBeNumber>[0]): value is number {
  return mustBeNumber(value) % 2 === 1
}

/**
 * Returns the `value` if it's an odd `number`.
 *
 * @throws Will throw an error otherwise.
 */
export function mustBeNumberOdd(value: Parameters<typeof isNumberOdd>[0]): number {
  if (isNumberOdd(value)) return value
  throw new Error(`Number ${value} must be odd`)
}

/**
 * Returns a `boolean` indicating whether `value` is an integer `number`.
 *
 * @throws Will throw an error if `value` is not a `number`.
 */
export function isNumberInteger(
  value: Parameters<typeof mustBeNumber>[0]
): value is number {
  return Number.isInteger(mustBeNumber(value))
}

/**
 * Returns the `value` if it's an integer `number`.
 *
 * @throws Will throw an error otherwise.
 */
export function mustBeNumberInteger(value: Parameters<typeof mustBeNumber>[0]): number {
  if (isNumberInteger(value)) return value
  throw new Error(`Number ${value} must be an integer`)
}

/**
 * Returns a `boolean` indicating whether `value` is a fractional `number`.
 *
 * @throws Will throw an error if `value` is not a `number`.
 */
export function isNumberFractional(
  value: Parameters<typeof mustBeNumber>[0]
): value is number {
  return !Number.isInteger(mustBeNumber(value))
}

/**
 * Returns the `value` if it's a fractional `number`.
 *
 * @throws Will throw an error if otherwise.
 */
export function mustBeNumberFractional(
  value: Parameters<typeof mustBeNumber>[0]
): number {
  if (isNumberFractional(value)) return value
  throw new Error(`Number ${value} must be an integer`)
}
