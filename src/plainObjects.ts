export function isPlainObject(value: unknown): value is { [key: string]: unknown } {
  return value?.constructor === Object
}

export function mustBePlainObject(value: unknown): { [key: string]: unknown } {
  if (isPlainObject(value)) return value
  throw new Error('Value must be an object')
}
