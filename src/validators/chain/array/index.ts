import {
  isArray,
  isArrayLength,
  isArrayMaxLength,
  isArrayMinLength,
  mustBeArray,
  mustBeArrayLength,
  mustBeArrayMaxLength,
  mustBeArrayMinLength,
} from '../../array/core'

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

export function makeIsArrayChain(value: Parameters<typeof isArray>[0]): IsArrayChain {
  return {
    result: isArray(value),
    length(length) {
      this.result = isArrayLength(value, length) && this.result
      return this
    },
    minLength(minLength) {
      this.result = isArrayMinLength(value, minLength) && this.result
      return this
    },
    maxLength(maxLength) {
      this.result = isArrayMaxLength(value, maxLength) && this.result
      return this
    },
  }
}

export function makeMustBeArrayChain(
  value: Parameters<typeof mustBeArray>[0]
): MustBeArrayChain {
  return {
    value: mustBeArray(value),
    length(target) {
      this.value = mustBeArrayLength(value, target)
      return this
    },
    minLength(minLength) {
      this.value = mustBeArrayMinLength(value, minLength)
      return this
    },
    maxLength(maxLength) {
      this.value = mustBeArrayMaxLength(value, maxLength)
      return this
    },
  }
}
