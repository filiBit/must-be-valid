export function isString(value: unknown): value is string {
  return typeof value === 'string'
}

export function mustBeString(value: unknown): string {
  if (isString(value)) return value
  throw new Error("The value must be of type 'string'")
}

export function isNumber(value: unknown): value is number {
  return typeof value === 'number'
}

export function mustBeNumber(value: unknown): number {
  if (isNumber(value)) return value
  throw new Error("The value must be of type 'number'")
}
