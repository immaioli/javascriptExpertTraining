const assert = require("assert");

const myMap = new Map();

// can have anything as key
myMap
    .set(1, 'one')
    .set('Maioli', { text: 'two' })
    .set(true, () => 'hello')

// using a constructor
const myMapWithConstrutor = new Map([
    ['1', 'str1'],
    [1, 'num1'],
    [true, 'bool1']
])

// console.log('myMap', myMap)
// console.log('myMap.get(1)', myMap.get(1))
assert.deepStrictEqual(myMap.get(1), 'one')
assert.deepStrictEqual(myMap.get('Maioli'), { text: 'two' })
assert.deepStrictEqual(myMap.get(true)(), 'hello')

// In Objects the key can only be string or symbol (number is coerced to string)
const onlyReferenceWorks = { id: 1 }
myMap.set(onlyReferenceWorks, { name: 'IMMaioli' })

assert.deepStrictEqual(myMap.get({ id: 1 }), undefined)
assert.deepStrictEqual(myMap.get(onlyReferenceWorks), { name: 'IMMaioli' })

// Utilities
// - In Object it would be Object.keys({a: 1}).length
assert.deepStrictEqual(myMap.size, 4)

// To check if an item exists in the Object
// item.key = if it doesn't exist = undefined
// if () = implicit coercion to boolean and returns false
// The right way in Object is ({name: 'IMMaioli'}).hasOwnProperty('name')
assert.ok(myMap.has(onlyReferenceWorks))

// To remove an item from the object
// delete item.id -> inefficient for javascript
assert.ok(myMap.delete(onlyReferenceWorks))

// You can't iterate over Objects directly
// you have to transform with Object.entries(item)
assert.deepStrictEqual(JSON.stringify([...myMap]), JSON.stringify([[1, "one"], ["Maioli", { "text": "two" }], [true, () => { }]]))

// for (const [key, value] of myMap) {
//     console.log({ key, value })
// }

// Object is unsafe, because depending on the key name, it can replace some default behavior
// ({}).toString() === '[object Object]'
// ({toString: ()=>'Hey'}).toString() === 'Hey

// Any key can collide with inherited properties of the object, like 
// constructor, toString, valueOf and etc

const actor = {
    name: 'Xuxa da Silva',
    toString: 'Queen: Xuxa da Silva'
}

// There is no restriction on key name
myMap.set(actor)

assert.ok(myMap.has(actor))
assert.throws(()=> myMap.get(actor).toString, TypeError)

// You can't clear an Object without reassigning it
myMap.clear()
assert.deepStrictEqual([...myMap.keys()], [])

// --- WeakMap
// Can be garbage collected after losing references
// Used in very specific cases

// Has most of the benefits of Map
// BUT: it is not iterable
// Only reference keys that you already know
// lighter and prevents memory leak, because after instances leave memory, everything is cleaned

const weakMap = new WeakMap()
const hero = { name: 'Flash'}

// weakMap.set(hero)
// weakMap.get(hero)
// weakMap.delete(hero) 
// weakMap.has(hero) 