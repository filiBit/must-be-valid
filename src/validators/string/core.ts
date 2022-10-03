import { mustBeNumber } from '../number/core'

/**
 * Returns a `boolean` indicating whether `value` is a string.
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string'
}

/**
 * Returns the `value` if it is a string
 * @throws Will throw an eror othewrwise
 */
export function mustBeString(value: Parameters<typeof isString>[0]): string {
  if (isString(value)) return value
  throw new Error('The value must be a string')
}

/**
 * Returns a `boolean` indicating whether `value` is a `string` equal to `target`.
 * @throws Will throw an error if either `value` or `target` is not a `string`.
 */
export function isStringEqualTo(value: unknown, target: unknown): value is string {
  return mustBeString(value) === mustBeString(target)
}

/**
 * Returns the `value` if it's a `string` equal to `target`.
 * @throws Will throw an error otherwise.
 */
export function mustBeStringEqualTo(
  value: Parameters<typeof isStringEqualTo>[0],
  target: Parameters<typeof isStringEqualTo>[1]
): string {
  if (isStringEqualTo(value, target)) return value
  throw new Error(`"${value}" must be equal to "${target}"`)
}

/**
 * Returns a `boolean` indicating whether `value` is a `string` whose length is equal to `length`.
 * @throws Will throw an error if `value` is not a `string` or `length` is not a `number`.
 */
export function isStringLength(
  value: Parameters<typeof mustBeString>[0],
  length: Parameters<typeof mustBeNumber>[0]
): value is string {
  return mustBeString(value).length === mustBeNumber(length)
}

/**
 * Returns the `value` if it's a `string` whose length is equal to `length`.
 * @throws Will throw an error otherwise.
 */
export function mustBeStringLength(
  value: Parameters<typeof isStringLength>[0],
  length: Parameters<typeof isStringLength>[1]
): string {
  if (isStringLength(value, length)) return value
  throw new Error(`String "${value}" must have a length of  ${length}`)
}

/**
 * Returns a `boolean` indicating whether `value` is a `string` whose length is equal to or greater than `minLength`.
 * @throws Will throw an error if `value` is not a `string` or `minLength` is not a `number`.
 */
export function isStringMinLength(
  value: Parameters<typeof mustBeString>[0],
  minLength: Parameters<typeof mustBeNumber>[0]
): value is string {
  return mustBeString(value).length >= mustBeNumber(minLength)
}

/**
 * Returns the `value` if it's a `string` whose length is equal to or greater than `minLength`.
 * @throws Will throw an error otherwise.
 */
export function mustBeStringMinLength(
  value: Parameters<typeof isStringMinLength>[0],
  minLength: Parameters<typeof isStringMinLength>[1]
): string {
  if (isStringMinLength(value, minLength)) return value
  throw new Error(`String "${value}" must have minimum length of ${minLength}`)
}

/**
 * Returns a `boolean` indicating whether `value` is a `string` whose length is equal to or smaller than `maxLength`.
 * @throws Will throw an error if `value` is not a `string` or `maxLength` is not a `number`.
 */
export function isStringMaxLength(
  value: Parameters<typeof mustBeString>[0],
  maxLength: Parameters<typeof mustBeNumber>[0]
): value is string {
  return mustBeString(value).length <= mustBeNumber(maxLength)
}

/**
 * Returns the `value` if it's a `string` whose length is equal to or smaller than `maxLength`.
 * @throws Will throw an error otherwise.
 */
export function mustBeStringMaxLength(
  value: Parameters<typeof isStringMaxLength>[0],
  maxLength: Parameters<typeof isStringMaxLength>[1]
) {
  if (isStringMaxLength(value, maxLength)) return value
  throw new Error(`String "${value}" must have maximum length of ${maxLength}`)
}
