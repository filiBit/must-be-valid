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

1. from branch `develop` create a feature branch with descriptive name
2. make changes
3. check for code style inconsistencies with `npm run lint`
4. ensure all tests pass: `npm run test`
5. submit a Pull request with description

## Contact author

`filip.biterski@gmail.com`
