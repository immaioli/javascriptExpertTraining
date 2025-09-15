const assert = require('assert')

const arr1 = ["0", "1", "2"]
const arr2 = ["2", "0", "3"]
const arr3 = arr1.concat(arr2)
// console.log('arr3', arr3.sort())
assert.deepStrictEqual(arr3.sort(), ['0', '0', '1', '2', '2', '3'])

const set = new Set()
arr1.map(item => set.add(item))
arr2.map(item => set.add(item))

// console.log('Set with add item per item', set)
assert.deepStrictEqual(Array.from(set), ['0', '1', '2', '3'])
// rest/spread
assert.deepStrictEqual(Array.from(new Set([...arr1, ...arr2])), ['0', '1', '2', '3'])

// console.log('set.keys', set.keys())
// console.log('set.values', set.values()) // only exists because of Map

// In regular Array, to know if an item exists
// [].indexOf('1') !== -1 or [0].includes(0)
assert.ok(set.has('3'))

// same theory as Map, but you always work with the whole list
// there is no get, so you can know if the item is in the Array or not and that's it.
// in the documentation there are examples on how to do an intersection, know what is in one list and not in another and so on

// has in both Arrays
const users01 = new Set([
    'huguinho',
    'luizinho',
    'zezinho'
])

const users02 = new Set([
    'tio donald',
    'huguinho',
    'tio patinhas'
])

const intersection = new Set([...users01].filter(user => users02.has(user)))
assert.deepStrictEqual(Array.from(intersection), ['huguinho'])

const difference = new Set([...users01].filter(user => !users02.has(user)))
assert.deepStrictEqual(Array.from(difference), ['luizinho', 'zezinho'])

// --- weakset

// same idea as weakMap
// it is not enumerable (iterable)
// only works with reference keys
// only has simple methods

const user1 = { id: 123 }
const user2 = { id: 321 }

const weakSet = new WeakSet([user1])
weakSet.add(user2)
weakSet.delete(user1)
weakSet.has(user1)
assert.deepEqual(Array.from(weakSet), [])