# API

We can categorize validators by their invocation style as **Single-call validators** and **Chain-call validators**.

---

## Table of contents

1. [Single-call validators](#1-single-call-validators)

   1.1. [String validators](#11-string-validators)

   1.2. [Number validators](#12-number-validators)

   1.3. [Object validators](#13-object-validators)

   1.4. [Array validators](#14-array-validators)

   1.5. [Function validators](#15-function-validators)

2. [Chain-call validators](#2-chain-call-validators)

   2.1. [String validator](#21-string-chain-validator)

   2.2. [Number validator](#22-number-chain-validator)

   2.3. [Array validator](#23array-chain-validator)

---

## 1. Single-call validators

Valdiators with prefix "is" return a boolean indicating the validity of `value` argument and use Typescript's type predicate to narrow the argument to a specific type.

Valdiators with prefix "mustBe" perform checks on `value` argument and if valid, returns the argument. Otherwise, throws an instance of `Error`.

### 1.1. String validators

```ts
isString(value: unknown) => boolean
mustBeString(value: unknown) => string

isStringEqualTo(value: unknown, target: unknown) => boolean
mustBeStringEqualTo(value: unknown, target: unknown) => string

isStringLength(value: unknown, length: unknown) => boolean
mustBeStringLength(value: unknown, length: unknown) => string

isStringMinLength(value: unknown, minLength: unknown) => boolean
mustBeStringMinLength(value: unknown, minLength: unknown) => string

isStringMaxLength(value: unknown, maxLength: unknown) => boolean
mustBeStringMaxLength(value: unknown, maxLength: unknown) => string
```

### 1.2. Number validators

```ts
isNumber(value: unknown) => boolean
mustBeNumber(value: unknown) => number

isNumberEqualTo(value: unknown, target: unknown) => boolean
mustBeNumberEqualTo(value: unknown, target: unknown) => number

isNumberMin(value: unknown, minValue: unknown) => boolean
mustBeNumberMin(value: unknown, minValue: unknown) => number

isNumberMax(value: unknown, maxValue: unknown) => boolean
mustBeNumberMax(value: unknown, maxValue: unknown) => number

isNumberEven(value: unknown) => boolean
mustBeNumberEven(value: unknown) => number

isNumberOdd(value: unknown) => boolean
mustBeNumberOdd(value: unknown) => number

isNumberInteger(value: unknown) => boolean
mustBeNumberInteger(value: unknown) => number

isNumberFractional(value: unknown) => boolean
mustBeNumberFractional(value: unknown) => number
```

### 1.3. Object validators

```ts
isPlainObject(value: unknown) => boolean
mustBePlainObject(value: unknown) => Record<Key, Value>
```

### 1.4 Array validators

```ts
isArray(value: unknown) => boolean
mustBeArray(value: unknown) => T[]

isArrayLength(value: unknown, length) => boolean
mustBeArrayLength(value: unknown, length) => T[]

isArrayMinLength(value: unknown, minLength: unknown) => boolean
mustBeArrayMinLength(value: unknown) => T[]

isArrayMaxLength(value: unknown, maxLength: unknown) => boolean
mustBeArrayMaxLength(value: unknown) => T[]
```

### 1.5. Function validators

```ts
isFunction(value: unknown) => boolean
mustBeFunction(value: unknown) => CallableFunction
```

## 2. Chain-call Validators

Chain validators can call Single-call validators in chain.

### 2.1 String chain validator

```ts
isIt.string(value: unknown) {
  result: boolean
  equalTo(target: unknown) => IsStringChain
  length(length: unknown) => IsStringChain
  minLength(minLength: unknown) => IsStringChain
  maxLength(maxLength: unknown) => IsStringChain
}

mustBe.string(value: unknown) {
  value: string
  equalTo(target: unknown) => MustBeStringChain
  length(length: unknown) => MustBeStringChain
  minLength(minLength: unknown) => MustBeStringChain
  maxLength(maxLength: unknown) => MustBeStringChain
}
```

### 2.2. Number chain validator

```ts
isIt.number(value: unknown) {
  result: boolean
  equalTo(target: unknown) => IsNumberChain
  min(minValue: unknown) => IsNumberChain
  max(maxValue: unknown) => IsNumberChain
  even() => IsNumberChain
  odd() => IsNumberChain
  integer() => IsNumberChain
  fractional() => IsNumberChain
}

mustBe.number(value: unknown) {
  value: number
  equalTo(target: unknown) => MustBeNumberChain
  min(minValue: unknown) => MustBeNumberChain
  max(maxValue: unknown) => MustBeNumberChain
  even() => MustBeNumberChain
  odd() => MustBeNumberChain
  integer() => MustBeNumberChain
  fractional() => MustBeNumberChain
}
```

### 2.3.Array chain validator

```ts
isIt.array(value: unknown) {
  result: boolean
  length(length: unknown) => IsArrayChain
  minLength(minLength: unknown) => IsArrayChain
  maxLength(maxLength: unknown) => IsArrayChain
}

mustBe.array(value: unknown) {
  value: []
  length(length: unknown) => MustBeArrayChain
  minLength(minLength: unknown) => MustBeArrayChain
  maxLength(maxLength: unknown) => MustBeArrayChain
}
```
