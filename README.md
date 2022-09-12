# must-validate

A Javascript library for dynamic type validation with Typescript support

## Install

`npm install must-validate`

## Use

```ts
import {
  isString,
  mustBeArrayOf,
  mustBeString,
  mustBeNumber,
  mustBePlainObject,
} from './must-validate'

function makeUser(userInfo: unknown): User {
  const userInfoObject = mustBePlainObject(userInfo) // throws an error if not valid

  return {
    userName: mustBeString(userInfoObject.userName), // throws an error if not valid
    password: mustBeString(userInfoObject.password), // throws an error if not valid
    age: mustBeNumber(userInfoObject.age), // throws an error if not valid
    friendIds: mustBeArrayOf(userInfoObject.friendIds, isString), // throws an error if not valid
  }
}
```

## Contribute

1. Make changes
2. Ensure consistent code style with `npm run eslint`, or `npm run lint:fix`
3. Ensure all tests pass `npm run test`
4. Submit a Pull request with description

## Contact author

`filip.biterski@gmail.com`
