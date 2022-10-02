/**
 * Returns `boolean` indicating whether `value` is a `function`.
 */
export function isFunction(value: unknown): value is CallableFunction {
  return typeof value === 'function'
}

/**
 * Returns the `value` if it's a function.
 * @throws Will throw an error otherwise.
 */
export function mustBeFunction<T>(
  value: T
): T extends CallableFunction ? T : CallableFunction {
  if (isFunction(value)) return value as T extends CallableFunction ? T : CallableFunction
  throw new Error('The value must be a function')
}
