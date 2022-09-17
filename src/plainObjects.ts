export function isPlainObject<Key extends string | number | symbol, Value = unknown>(
  value: Record<Key, Value> | Value
): value is Record<Key, Value> {
  return (value as Record<Key, Value>)?.constructor === Object
}

export function mustBePlainObject<Key extends string | number | symbol, Value = unknown>(
  value: Record<Key, Value> | Value
): Record<Key, Value> {
  if (isPlainObject(value)) return value as Record<Key, Value>
  throw new Error('The value must be an object')
}
