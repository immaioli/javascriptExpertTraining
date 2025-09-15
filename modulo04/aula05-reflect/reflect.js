'use strict'

const assert = require('assert')

// Ensure semantics and security in objects

// ---- apply
const userApply = {
    add(myValue) {
        return this.arg1 + this.arg2 + myValue
    }
}
// Function.prototype.apply = ()=> {throw new TypeError('Error 001')}
// myObj.add.apply = function () {throw new Error('Error 002')}

assert.deepStrictEqual(userApply.add.apply({ arg1: 10, arg2: 20 }, [100]), 130)

// A problem that happens (rare)
// Function.prototype.apply = ()=> {throw new TypeError('Error 001')}

// This one can happen
userApply.add.apply = function () { throw new TypeError('Error 002') }

assert.throws(
    () => userApply.add.apply({}, []),
    {
        name: "TypeError",
        message: "Error 002"
    }
)

// Using reflect:
const result = Reflect.apply(userApply.add, { arg1: 40, arg2: 20 }, [200])
assert.deepStrictEqual(result, 260)

// ---- apply

// --- defineProperty

// semantic issues
function MyDate() { }

// Ugly as hell, everything is Object, but Object adding prop to a function?
Object.defineProperty(MyDate, 'withObject', { value: () => 'Hey theres' })

// Now it makes more sense
Reflect.defineProperty(MyDate, 'withReflection', { value: () => 'Hey dude' })

assert.deepStrictEqual(MyDate.withObject(), 'Hey theres')
assert.deepStrictEqual(MyDate.withReflection(), 'Hey dude')
// --- defineProperty

// --- deleteProperty
const withDelete = { user: 'Huguinho' }
// inefficient, avoid as much as possible
delete withDelete.user

assert.deepStrictEqual(withDelete.hasOwnProperty('user'), false)

const withReflection = { user: 'Luizinho' }
Reflect.deleteProperty(withReflection, 'user')
assert.deepStrictEqual(withReflection.hasOwnProperty('user'), false)

// --- deleteProperty

// ---- get

// We should only do a get on reference instances
assert.deepStrictEqual(1['userName'], undefined)

// With reflection, an exception is thrown!
assert.throws(() => Reflect.get(1, 'userName'), TypeError)
// ---- get

// ---- has
assert.ok('superman' in { superman: '' })
assert.ok(Reflect.has({ batman: '' }, 'batman'))

// ---- has

// ---- ownKeys
const user = Symbol('user')
const databaseUser = {
    id: 1,
    [Symbol.for('password')]: 123,
    [user]: 'immaioli'
} 

// With object methods, we have to make 2 requests
const objectKeys = [
    ...Object.getOwnPropertyNames(databaseUser),
    ...Object.getOwnPropertySymbols(databaseUser)
]
assert.deepStrictEqual(objectKeys, ['id', Symbol.for('password'), user ])

// With reflection, only one method
assert.deepStrictEqual(Reflect.ownKeys(databaseUser), ['id', Symbol.for('password'), user])
