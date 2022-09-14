export function isPlainObject<Key extends string | number | symbol, Value = unknown>(
  value: Record<Key, Value> | Value
): value is Record<Key, Value> {
  return value?.constructor === Object
}

export function mustBePlainObject<Key extends string | number | symbol, Value = unknown>(
  value: Record<Key, Value> | Value
): Record<Key, Value> {
  if (isPlainObject(value)) return value as Record<Key, Value>
  throw new Error('Value must be an object')
}
