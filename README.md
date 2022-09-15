# must-be-valid

A Javascript library for type validation with Typescript support

## Install

```sh
npm install must-be-valid
```

## Use

```ts
import {
  mustBeArray,
  mustBeNumber,
  mustBePlainObject,
  mustBeString,
} from 'must-be-valid'

function makeUser(userDto: unknown) {
  const userInfo = mustBePlainObject(userDto) // throws if not valid

  return {
    userName: mustBeString(userInfo.userName), // throws if not valid
    password: mustBeString(userInfo.password), // throws if not valid
    age: mustBeNumber(userInfo.age), // throws if not valid
    friendIds: mustBeArray(userInfo.friendIds).map((el) => mustBeString(el)), // throws if not valid
  }
}
```

### Awesome type inferencing

Thanks to extensive Typescript support by the library, including the use of generics, Typescript infers the following return type of `makeUser` function:

```ts
function makeUser(userDto: any): {
  userName: string
  password: string
  age: number
  friendIds: string[]
}
```

## Contribute

1. open an Issue on GitHub, describe the changes you want to introduce and check the feedback from community
1. from branch `develop` create a feature branch with descriptive name
2. make changes
3. check for code style inconsistencies with `npm run lint`
4. ensure all tests pass: `npm run test`
5. submit a Pull request with description

Thank you <3

## Contact author

`filip.biterski@gmail.com`
