# must-be-valid

A Javascript library for data & type validation with Typescript support

## Install

```sh
npm install must-be-valid
```

## Use

```ts
import { mustBeArray, mustBeNumber, mustBeObject, mustBeString } from 'must-be-valid'

function makeUser(userDto: unknown) {
  const userInfo = mustBeObject(userDto) // throws if not valid

  return {
    username: mustBeString(userInfo.username), // throws if not valid
    password: mustBeString(userInfo.password), // throws if not valid
    age: mustBeNumber(userInfo.age), // throws if `age` is not a number
    friendIds: mustBeArray(userInfo.friendIds).map((f) => mustBeString(f)), // throws if not valid
  }
}
```

### Awesome type inferencing

Thanks to extensive Typescript support by the library, including the use of generics, Typescript infers the following return type of `makeUser` function:

```ts
function makeUser(userDto: unknown): {
  username: string
  password: string
  age: number
  friendIds: string[]
}
```

### Chaining

```js
const password = mustBe.string(userInfo.password).min(7).max(50).value // throws if not valid
const age = mustBe.number(userInfo.age).min(13).value // throws if not valid
```

## Documentation

- [API documentation](API.md)
- [Playground](https://codesandbox.io/s/must-be-valid-example-sycyz8)
- [Changelog](changelog.md)

## Contribute

1. open an Issue on GitHub, describe the changes you want to introduce and check the feedback from community
1. from branch `develop` create a feature branch with descriptive name
1. make changes
1. check for code style inconsistencies with `npm run lint`
1. ensure all tests pass: `npm run test`
1. submit a Pull request with description

Thank you <3

## Contact author

`filip.biterski@gmail.com`
