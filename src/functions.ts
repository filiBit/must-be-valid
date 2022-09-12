export function isFunction(value: unknown): value is CallableFunction {
  return typeof value === 'function'
}

export function mustBeFunction(value: unknown): CallableFunction {
  if (isFunction(value)) return value
  throw new Error("The value must be of type 'function'")
}
