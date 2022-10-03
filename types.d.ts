declare module 'must-be-valid' {
  /**
   * Returns a `boolean` indicating whether `value` is a `number`.
   */
  export function isNumber(value: unknown): value is number
  /**
   * Returns the `value` if it's a `number`.
   *
   * @throws Will throw an error otherwise.
   */
  export function mustBeNumber(value: Parameters<typeof isNumber>[0]): number
  /**
   * Returns a `boolean` indicating whether `value` is a number that equals `value2`.
   *
   * @throws Will throw an error if either `value` or `value2` is not a number.
   */
  export function isNumberEqualTo(
    value: Parameters<typeof mustBeNumber>[0],
    value2: Parameters<typeof mustBeNumber>[0]
  ): value is number
  /**
   * Returns a `value` if it's a `number` that equals `value2`.
   *
   * @throws Will throw an error otherwise.
   */
  export function mustBeNumberEqualTo(
    value: Parameters<typeof isNumberEqualTo>[0],
    value2: Parameters<typeof isNumberEqualTo>[1]
  ): number
  /**
   * Returns a `boolean` indicating whether `value` is a `number` equal or greater than `minValue`.
   *
   * @throws Will throw an error if either `value` or `minValue` is not a `number`.
   */
  export function isNumberMin(
    value: Parameters<typeof mustBeNumber>[0],
    minValue: Parameters<typeof mustBeNumber>[0]
  ): value is number
  /**
   * Returns the `value` if it's a `number` equal or greater than `minValue`.
   *
   * @throws Will throw an error otherwise.
   */
  export function mustBeNumberMin(
    value: Parameters<typeof isNumberMin>[0],
    minValue: Parameters<typeof isNumberMin>[1]
  ): number
  /**
   * Returns a `boolean` indicating whether `value` is a `number` equal or smaller than `maxValue`.
   *
   * @throws Will throw an error if either `value` or `maxValue` is not a `number`.
   */
  export function isNumberMax(
    value: Parameters<typeof mustBeNumber>[0],
    maxValue: Parameters<typeof mustBeNumber>[0]
  ): value is number
  /**
   * Returns the `value` if it's a `number` equal or smaller than `maxValue`
   *
   * @throws Will throw an error otherwise.
   */
  export function mustBeNumberMax(
    value: Parameters<typeof isNumberMax>[0],
    maxValue: Parameters<typeof isNumberMax>[1]
  ): number
  /**
   * Returns a `boolean` indicating whether `value` is an even `number`.
   *
   * @throws Will throw an error if `value` is not a `number`.
   */
  export function isNumberEven(value: Parameters<typeof mustBeNumber>[0]): value is number
  /**
   * Returns the `value` it's an even `number`.
   *
   * @throws Will throw an error otherwise.
   */
  export function mustBeNumberEven(value: Parameters<typeof isNumberEven>[0]): number
  /**
   * Returns a `boolean` indicating whether `value` is an odd `number`.
   *
   * @throws Will throw an error if `value` is not a `number`.
   */
  export function isNumberOdd(value: Parameters<typeof mustBeNumber>[0]): value is number
  /**
   * Returns the `value` if it's an odd `number`.
   *
   * @throws Will throw an error otherwise.
   */
  export function mustBeNumberOdd(value: Parameters<typeof isNumberOdd>[0]): number
  /**
   * Returns a `boolean` indicating whether `value` is an integer `number`.
   *
   * @throws Will throw an error if `value` is not a `number`.
   */
  export function isNumberInteger(
    value: Parameters<typeof mustBeNumber>[0]
  ): value is number
  /**
   * Returns the `value` if it's an integer `number`.
   *
   * @throws Will throw an error otherwise.
   */
  export function mustBeNumberInteger(value: Parameters<typeof mustBeNumber>[0]): number
  /**
   * Returns a `boolean` indicating whether `value` is a fractional `number`.
   *
   * @throws Will throw an error if `value` is not a `number`.
   */
  export function isNumberFractional(
    value: Parameters<typeof mustBeNumber>[0]
  ): value is number
  /**
   * Returns the `value` if it's a fractional `number`.
   *
   * @throws Will throw an error if otherwise.
   */
  export function mustBeNumberFractional(
    value: Parameters<typeof mustBeNumber>[0]
  ): number

  /**
   * Returns a `boolean` indicating whether `value` is an array.
   */
  export function isArray<T>(value: T | T[]): value is T[]
  /**
   * Returns `value` if it is an array.
   * @throws Will throw an error otherwise.
   */
  export function mustBeArray<T>(value: T | T[]): T[]
  /**
   * Returns a `boolean` indicating whether `value` is an array whose length is equal to `length`.
   * @throws Will throw an error if `value` isn't an array, or `length` isn't a `number`.
   */
  export function isArrayLength<T>(value: T | T[], length: unknown): value is T[]
  /**
   * Returns the `value` if it's an array whose length is equal to `length`.
   * @throws Will throw an error otherwise.
   */
  export function mustBeArrayLength<T>(value: T | T[], length: unknown): T[]
  /**
   * Returns a `boolean` indicating whether `value` is an array whose length is equal to or greater than `minLength`.
   * @throws Will throw an error if `value` isn't an array, or `length` isn't a `number`.
   */
  export function isArrayMinLength<T>(value: T | T[], minLength: unknown): value is T[]
  /**
   * Returns the `value` if it's an array whose length is equal to or greater than `minLength`.
   * @throws Will throw an error otherwise.
   */
  export function mustBeArrayMinLength<T>(value: T | T[], minLength: unknown): T[]
  /**
   * Returns a `boolean` indicating whether `value` is an array whose length is equal to or smaller than `maxLength`.
   * @throws Will throw an error if `value` isn't an array, or `length` isn't a `number`.
   */
  export function isArrayMaxLength<T>(value: T | T[], maxLength: unknown): value is T[]
  /**
   * Returns the `value` if it's an array whose length is equal to or smaller than `maxLength`.
   * @throws Will throw an error otherwise.
   */
  export function mustBeArrayMaxLength<T>(value: T | T[], maxLength: unknown): T[]

  interface IsArrayChain {
    result: ReturnType<typeof isArray>
    length: (length: Parameters<typeof isArrayLength>[1]) => IsArrayChain
    minLength: (minLength: Parameters<typeof isArrayMinLength>[1]) => IsArrayChain
    maxLength: (maxLength: Parameters<typeof isArrayMaxLength>[1]) => IsArrayChain
  }
  interface MustBeArrayChain {
    value: ReturnType<typeof mustBeArray>
    length: (length: Parameters<typeof mustBeArrayLength>[1]) => MustBeArrayChain
    minLength: (minLength: Parameters<typeof mustBeArrayMinLength>[1]) => MustBeArrayChain
    maxLength: (maxLength: Parameters<typeof mustBeArrayMaxLength>[1]) => MustBeArrayChain
  }
  export function makeIsArrayChain(value: Parameters<typeof isArray>[0]): IsArrayChain
  export function makeMustBeArrayChain(
    value: Parameters<typeof mustBeArray>[0]
  ): MustBeArrayChain

  interface IsNumberChain {
    result: ReturnType<typeof isNumber>
    equalTo: (target: Parameters<typeof isNumberEqualTo>[1]) => IsNumberChain
    min: (minValue: Parameters<typeof isNumberMin>[1]) => IsNumberChain
    max: (maxValue: Parameters<typeof isNumberMax>[1]) => IsNumberChain
    even: () => IsNumberChain
    odd: () => IsNumberChain
    integer: () => IsNumberChain
    fractional: () => IsNumberChain
  }
  interface MustBeNumberChain {
    value: ReturnType<typeof mustBeNumber>
    equalTo: (target: Parameters<typeof mustBeNumberEqualTo>[1]) => MustBeNumberChain
    min: (minValue: Parameters<typeof mustBeNumberMin>[1]) => MustBeNumberChain
    max: (maxValue: Parameters<typeof mustBeNumberMax>[1]) => MustBeNumberChain
    even: () => MustBeNumberChain
    odd: () => MustBeNumberChain
    integer: () => MustBeNumberChain
    fractional: () => MustBeNumberChain
  }
  export function makeIsNumberChain(value: Parameters<typeof isNumber>[0]): IsNumberChain
  export function makeMustBeNumberChain(
    value: Parameters<typeof mustBeNumber>[0]
  ): MustBeNumberChain

  /**
   * Returns a `boolean` indicating whether `value` is a string.
   */
  export function isString(value: unknown): value is string
  /**
   * Returns the `value` if it is a string
   * @throws Will throw an eror othewrwise
   */
  export function mustBeString(value: Parameters<typeof isString>[0]): string
  /**
   * Returns a `boolean` indicating whether `value` is a `string` equal to `target`.
   * @throws Will throw an error if either `value` or `target` is not a `string`.
   */
  export function isStringEqualTo(value: unknown, target: unknown): value is string
  /**
   * Returns the `value` if it's a `string` equal to `target`.
   * @throws Will throw an error otherwise.
   */
  export function mustBeStringEqualTo(
    value: Parameters<typeof isStringEqualTo>[0],
    target: Parameters<typeof isStringEqualTo>[1]
  ): string
  /**
   * Returns a `boolean` indicating whether `value` is a `string` whose length is equal to `length`.
   * @throws Will throw an error if `value` is not a `string` or `length` is not a `number`.
   */
  export function isStringLength(
    value: Parameters<typeof mustBeString>[0],
    length: Parameters<typeof mustBeNumber>[0]
  ): value is string
  /**
   * Returns the `value` if it's a `string` whose length is equal to `length`.
   * @throws Will throw an error otherwise.
   */
  export function mustBeStringLength(
    value: Parameters<typeof isStringLength>[0],
    length: Parameters<typeof isStringLength>[1]
  ): string
  /**
   * Returns a `boolean` indicating whether `value` is a `string` whose length is equal to or greater than `minLength`.
   * @throws Will throw an error if `value` is not a `string` or `minLength` is not a `number`.
   */
  export function isStringMinLength(
    value: Parameters<typeof mustBeString>[0],
    minLength: Parameters<typeof mustBeNumber>[0]
  ): value is string
  /**
   * Returns the `value` if it's a `string` whose length is equal to or greater than `minLength`.
   * @throws Will throw an error otherwise.
   */
  export function mustBeStringMinLength(
    value: Parameters<typeof isStringMinLength>[0],
    minLength: Parameters<typeof isStringMinLength>[1]
  ): string
  /**
   * Returns a `boolean` indicating whether `value` is a `string` whose length is equal to or smaller than `maxLength`.
   * @throws Will throw an error if `value` is not a `string` or `maxLength` is not a `number`.
   */
  export function isStringMaxLength(
    value: Parameters<typeof mustBeString>[0],
    maxLength: Parameters<typeof mustBeNumber>[0]
  ): value is string
  /**
   * Returns the `value` if it's a `string` whose length is equal to or smaller than `maxLength`.
   * @throws Will throw an error otherwise.
   */
  export function mustBeStringMaxLength(
    value: Parameters<typeof isStringMaxLength>[0],
    maxLength: Parameters<typeof isStringMaxLength>[1]
  ): string

  interface IsStringChain {
    result: ReturnType<typeof isString>
    equalTo: (target: Parameters<typeof isStringEqualTo>[1]) => IsStringChain
    length: (length: Parameters<typeof isStringLength>[1]) => IsStringChain
    minLength: (minLength: Parameters<typeof isStringMinLength>[1]) => IsStringChain
    maxLength: (maxLength: Parameters<typeof isStringMaxLength>[1]) => IsStringChain
  }
  interface MustBeStringChain {
    value: string
    equalTo: (target: Parameters<typeof mustBeStringEqualTo>[1]) => MustBeStringChain
    length: (length: Parameters<typeof mustBeStringLength>[1]) => MustBeStringChain
    minLength: (
      minLength: Parameters<typeof mustBeStringMinLength>[1]
    ) => MustBeStringChain
    maxLength: (
      maxLength: Parameters<typeof mustBeStringMaxLength>[1]
    ) => MustBeStringChain
  }
  export function makeIsStringChain(value: Parameters<typeof isString>[0]): IsStringChain
  export function makeMustBeStringChain(
    value: Parameters<typeof mustBeString>[0]
  ): MustBeStringChain
  export const isIt: {
    string: typeof makeIsStringChain
    number: typeof makeIsNumberChain
    array: typeof makeIsArrayChain
  }
  export const mustBe: {
    string: typeof makeMustBeStringChain
    number: typeof makeMustBeNumberChain
    array: typeof makeMustBeArrayChain
  }

  /**
   * Returns `boolean` indicating whether `value` is a `function`.
   */
  export function isFunction(value: unknown): value is CallableFunction
  /**
   * Returns the `value` if it's a function.
   * @throws Will throw an error otherwise.
   */
  export function mustBeFunction<T>(
    value: T
  ): T extends CallableFunction ? T : CallableFunction

  /**
   * Returns a `boolean` indicating whether `value` is an object and also isn't an array or `null`.
   */
  export function isObject<Key extends string | number | symbol, Value = unknown>(
    value: Record<Key, Value> | Value
  ): value is Record<Key, Value>
  /**
   * Returns the `value` if it is an `object` and also isn't an array or `null`.
   * @throws Will throw an error otherwise.
   */
  export function mustBeObject<T>(
    value: T
  ): T extends object ? T : { [key: string | number | symbol]: unknown }
}
