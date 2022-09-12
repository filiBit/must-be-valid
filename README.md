# must-be-valid

A Javascript library for type validation with Typescript support

## Install

`npm install must-be-valid`

## Use

```ts
import {
  isString,
  mustBeArrayOf,
  mustBeString,
  mustBeNumber,
  mustBePlainObject,
} from 'must-be-valid'

function makeUser(userInfo: unknown): User {
  const userInfoObject = mustBePlainObject(userInfo) // throws if not valid

  return {
    userName: mustBeString(userInfoObject.userName), // throws if not valid
    password: mustBeString(userInfoObject.password), // throws if not valid
    age: mustBeNumber(userInfoObject.age), // throws if not valid
    friendIds: mustBeArrayOf(userInfoObject.friendIds, isString), // throws  if not valid
  }
}
```

## Contribute

1. Make changes
2. Check for consistent code style: `npm run lint`, or auto-apply: `npm run lint:fix`
3. Ensure all tests pass: `npm run test`
4. Submit a Pull request with description

## Contact author

`filip.biterski@gmail.com`
