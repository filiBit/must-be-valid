import { mustBeNumber } from '../number/core'

/**
 * Returns a `boolean` indicating whether `value` is an array.
 */
export function isArray<T>(value: T | T[]): value is T[] {
  return Array.isArray(value)
}

/**
 * Returns `value` if it is an array.
 * @throws Will throw an error otherwise.
 */
export function mustBeArray<T>(value: T | T[]): T[] {
  if (isArray(value)) return value
  throw new Error('The value must be an array')
}

/**
 * Returns a `boolean` indicating whether `value` is an array whose length is equal to `length`.
 * @throws Will throw an error if `value` isn't an array, or `length` isn't a `number`.
 */
export function isArrayLength<T>(value: T | T[], length: unknown): value is T[] {
  const array = mustBeArray(value)
  return array.length === mustBeNumber(length)
}

/**
 * Returns the `value` if it's an array whose length is equal to `length`.
 * @throws Will throw an error otherwise.
 */
export function mustBeArrayLength<T>(value: T | T[], length: unknown): T[] {
  if (isArrayLength(value, length)) return value
  throw new Error(`Array must have a length of ${length}`)
}

/**
 * Returns a `boolean` indicating whether `value` is an array whose length is equal to or greater than `minLength`.
 * @throws Will throw an error if `value` isn't an array, or `length` isn't a `number`.
 */
export function isArrayMinLength<T>(value: T | T[], minLength: unknown): value is T[] {
  const array = mustBeArray(value)
  return array.length >= mustBeNumber(minLength)
}

/**
 * Returns the `value` if it's an array whose length is equal to or greater than `minLength`.
 * @throws Will throw an error otherwise.
 */
export function mustBeArrayMinLength<T>(value: T | T[], minLength: unknown): T[] {
  if (isArrayMinLength(value, minLength)) return value
  throw new Error(`Array must have a length of ${minLength}`)
}

/**
 * Returns a `boolean` indicating whether `value` is an array whose length is equal to or smaller than `maxLength`.
 * @throws Will throw an error if `value` isn't an array, or `length` isn't a `number`.
 */
export function isArrayMaxLength<T>(value: T | T[], maxLength: unknown): value is T[] {
  const array = mustBeArray(value)
  return array.length <= mustBeNumber(maxLength)
}

/**
 * Returns the `value` if it's an array whose length is equal to or smaller than `maxLength`.
 * @throws Will throw an error otherwise.
 */
export function mustBeArrayMaxLength<T>(value: T | T[], maxLength: unknown): T[] {
  if (isArrayMaxLength(value, maxLength)) return value
  throw new Error(`Array must have a length of ${maxLength}`)
}
