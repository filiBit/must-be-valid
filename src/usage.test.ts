import { mustBeArrayOf } from './arrays'
import { mustBePlainObject } from './plainObjects'
import { isString, mustBeNumber, mustBeString } from './primitives'

function makeUser(userInfo: unknown) {
  const userInfoObject = mustBePlainObject(userInfo) // throws an error if not valid
  return {
    userName: mustBeString(userInfoObject.userName), // throws an error if not valid
    password: mustBeString(userInfoObject.password), // throws an error if not valid
    age: mustBeNumber(userInfoObject.age), // throws an error if not valid
    friendIds: mustBeArrayOf(userInfoObject.friendIds, isString), // throws an error if not valid
  }
}

const userInfo1 = {
  userName: 'dsag',
  password: 'asdf',
  age: 34,
  friendIds: ['asf', 'asdf'],
}

const userInfo2 = {
  userName: 'dsag',
  password: 'asdf',
  age: 34,
  friendIds: ['asf', 5],
}

describe('Usage tests', () => {
  test('Example: makeUser()', () => {
    expect(makeUser(userInfo1)).toEqual(userInfo1)
    expect(() => makeUser(userInfo2)).toThrowError()
  })
})
