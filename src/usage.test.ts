import { mustBeArray } from './arrays'
import { mustBePlainObject } from './plainObjects'
import { mustBeNumber, mustBeString } from './primitives'

function makeUser(userDto: unknown) {
  const userInfo = mustBePlainObject(userDto) // throws if not valid

  return {
    userName: mustBeString(userInfo.userName), // throws if not valid
    password: mustBeString(userInfo.password), // throws if not valid
    age: mustBeNumber(userInfo.age), // throws if not valid
    friendIds: mustBeArray(userInfo.friendIds).map((f) => mustBeString(f)), // throws if not valid
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
