declare module 'must-be-valid' {
  export function isArray<T>(value: T | T[]): value is T[]
  export function mustBeArray<T>(value: T | T[]): T[]
  export function isNonEmptyArray<T>(value: T | T[]): value is T[]
  export function mustBeNonEmptyArray<T>(value: T | T[]): T[]
  export function isArrayOf<T>(
    value: unknown,
    check: (arg: unknown) => arg is T
  ): value is T[]
  export function mustBeArrayOf<T>(value: unknown, check: (arg: unknown) => arg is T): T[]
  export function isFunction(value: unknown): value is CallableFunction
  export function mustBeFunction(value: unknown): CallableFunction
  export function isPlainObject(value: unknown): value is {
    [key: string]: unknown
  }
  export function mustBePlainObject(value: unknown): {
    [key: string]: unknown
  }
  export function isString(value: unknown): value is string
  export function mustBeString(value: unknown): string
  export function isNumber(value: unknown): value is number
  export function mustBeNumber(value: unknown): number
}
