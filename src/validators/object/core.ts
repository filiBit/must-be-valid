/**
 * Returns a `boolean` indicating whether `value` is an object and also isn't an array or `null`.
 */
export function isObject<Key extends string | number | symbol, Value = unknown>(
  value: Record<Key, Value> | Value
): value is Record<Key, Value> {
  return typeof value === 'object' && !Array.isArray(value) && value !== null
}

/**
 * Returns the `value` if it is an `object` and also isn't an array or `null`.
 * @throws Will throw an error otherwise.
 */
export function mustBeObject(
  value: unknown
): typeof value extends object
  ? typeof value
  : { [key: string | number | symbol]: unknown } {
  if (isObject(value)) return value
  throw new Error('The value must be an object')
}
