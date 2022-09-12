export function isArray<T>(value: T | T[]): value is T[] {
  return Array.isArray(value)
}

export function mustBeArray<T>(value: T | T[]): T[] {
  if (isArray(value)) return value
  throw new Error('The value must be an array')
}

export function isNonEmptyArray<T>(value: T | T[]): value is T[] {
  return isArray(value) && value.length > 0
}

export function mustBeNonEmptyArray<T>(value: T | T[]): T[] {
  const array = mustBeArray(value)
  if (isNonEmptyArray(array)) return array

  throw new Error('The value must be a non empty array of arrays')
}

export function isArrayOf<T>(
  value: unknown,
  check: (arg: unknown) => arg is T
): value is T[] {
  return isNonEmptyArray(value) && value.every((element) => check(element))
}

export function mustBeArrayOf<T>(value: unknown, check: (arg: unknown) => arg is T): T[] {
  if (isArrayOf(value, check)) return value
  throw new Error('Elements of the array must be of specified type')
}
