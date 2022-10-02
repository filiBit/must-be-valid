import {
  isString,
  mustBeString,
  mustBeStringMaxLength,
  mustBeStringMinLength,
  isStringMaxLength,
  isStringMinLength,
  isStringLength,
  mustBeStringLength,
  isStringEqualTo,
  mustBeStringEqualTo,
} from '../../string/core'

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
  minLength: (minLength: Parameters<typeof mustBeStringMinLength>[1]) => MustBeStringChain
  maxLength: (maxLength: Parameters<typeof mustBeStringMaxLength>[1]) => MustBeStringChain
}

export function makeIsStringChain(value: Parameters<typeof isString>[0]): IsStringChain {
  return {
    result: isString(value),
    equalTo(target) {
      this.result &&= isStringEqualTo(value, target)
      return this
    },
    length(length) {
      this.result &&= isStringLength(value, length)
      return this
    },
    minLength(minLength) {
      this.result &&= this.result && isStringMinLength(value, minLength)
      return this
    },
    maxLength(maxLength) {
      this.result &&= this.result && isStringMaxLength(value, maxLength)
      return this
    },
  }
}

export function makeMustBeStringChain(
  value: Parameters<typeof mustBeString>[0]
): MustBeStringChain {
  return {
    value: mustBeString(value),
    equalTo(target) {
      this.value = mustBeStringEqualTo(this.value, target)
      return this
    },
    length(length) {
      this.value = mustBeStringLength(value, length)
      return this
    },
    minLength(minLength) {
      this.value = mustBeStringMinLength(this.value, minLength)
      return this
    },
    maxLength(maxLength) {
      this.value = mustBeStringMaxLength(this.value, maxLength)
      return this
    },
  }
}
