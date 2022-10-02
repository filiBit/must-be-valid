import {
  isNumber,
  isNumberEqualTo,
  isNumberEven,
  isNumberFractional,
  isNumberInteger,
  isNumberMax,
  isNumberMin,
  isNumberOdd,
  mustBeNumber,
  mustBeNumberEqualTo,
  mustBeNumberEven,
  mustBeNumberFractional,
  mustBeNumberInteger,
  mustBeNumberMax,
  mustBeNumberMin,
  mustBeNumberOdd,
} from '../../number/core'

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

export function makeIsNumberChain(value: Parameters<typeof isNumber>[0]): IsNumberChain {
  return {
    result: isNumber(value),
    equalTo(target) {
      this.result = isNumberEqualTo(value, target) && this.result
      return this
    },
    min(minValue) {
      this.result = isNumberMin(value, minValue) && this.result
      return this
    },
    max(maxValue) {
      this.result = isNumberMax(value, maxValue) && this.result
      return this
    },
    even() {
      this.result = isNumberEven(value) && this.result
      return this
    },
    odd() {
      this.result = isNumberOdd(value) && this.result
      return this
    },
    integer() {
      this.result = isNumberInteger(value) && this.result
      return this
    },
    fractional() {
      this.result = isNumberFractional(value) && this.result
      return this
    },
  }
}

export function makeMustBeNumberChain(
  value: Parameters<typeof mustBeNumber>[0]
): MustBeNumberChain {
  return {
    value: mustBeNumber(value),
    equalTo(target) {
      this.value = mustBeNumberEqualTo(value, target)
      return this
    },
    min(minValue) {
      this.value = mustBeNumberMin(value, minValue)
      return this
    },
    max(maxValue) {
      this.value = mustBeNumberMax(value, maxValue)
      return this
    },
    even() {
      this.value = mustBeNumberEven(value)
      return this
    },
    odd() {
      this.value = mustBeNumberOdd(value)
      return this
    },
    integer() {
      this.value = mustBeNumberInteger(value)
      return this
    },
    fractional() {
      this.value = mustBeNumberFractional(value)
      return this
    },
  }
}
