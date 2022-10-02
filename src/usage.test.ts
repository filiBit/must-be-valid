import { mustBeArray } from './validators/array/core'
import { mustBeObject } from './validators/object/core'
import { mustBeString } from './validators/string'
import { mustBe } from './validators/chain'

function makeUser(userDto: unknown) {
  const userInfo = mustBeObject(userDto) // throws if not valid

  return {
    username: mustBeString(userInfo.username), // throws if not valid
    password: mustBe.string(userInfo.password).minLength(7).maxLength(50).value, // throws if not valid
    age: mustBe.number(userInfo.age).min(18).value, // throws if `age` is not a number
    friendIds: mustBeArray(userInfo.friendIds).map((f) => mustBeString(f)), // throws if not valid
  }
}

const userInfo1 = {
  username: 'user123',
  password: 'password123',
  age: 34,
  friendIds: ['asf', 'asdf'],
}

const userInfo2 = {
  username: 'user123',
  password: 'password123',
  age: 8,
  friendIds: ['asf', 'asdf'],
}

const userInfoInvalid1 = {
  username: 'user123',
  password: 'pass',
  age: 34,
  friendIds: ['asf', 'asdf'],
}

const userInfoInvalid2 = {
  username: 'user123',
  password: 'password123',
  age: 34,
  friendIds: [5, 'asdf'],
}

describe('Usage tests', () => {
  test('Example: makeUser()', () => {
    expect(makeUser(userInfo1)).toEqual(userInfo1)
    expect(makeUser(userInfo2)).toEqual(userInfo2)
    expect(() => makeUser(userInfoInvalid1)).toThrow()
    expect(() => makeUser(userInfoInvalid2)).toThrow()
  })
})
