// Value Type vs Reference Type (Immutability vs Mutability)
// NOTE
// Primitive types are stored directly as values. 
// Assigning them to another variable creates an independent copy in memory.
// 
// Reference types (like objects and arrays), on the other hand, store a memory address (a reference) to the data in the heap. 
// When you assign one object to another variable, both variables share the same reference. 
// That’s why a change made through one variable is reflected when accessing the same object through the other variable.
// 
// Summary:
// Primitives → values are stored directly → assignment makes a copy.
// References → values are stored in the heap → assignment makes a shared pointer to the same object.

// What will be the value of the first counter?

const { deepStrictEqual } = require('assert')

let counter = 0
let counter2 = counter
counter2++
// In this case, the value of `counter` is not changed, only `counter2` is modified.

const item = { counter: 0 }
const item2 = item
// In this case, the value of `counter` is modified in both references.

// Primitive types create a copy in memory
deepStrictEqual(counter, 0)
deepStrictEqual(counter2, 1)

// Reference types copy the memory address, so both variables point to the same location
item2.counter++
deepStrictEqual(item, { counter: 1 })
item.counter++
deepStrictEqual(item2, { counter: 2 })