const assert = require('assert')

// Generator function that calculates the product of two arguments
function* calculation(arg1, arg2) {
    yield arg1 * arg2
}

// Main generator function that yields a sequence of values: 'Hello', '-', 'World', and the result of calculation(20, 10), which is 200
function* main() {
    yield 'Hello'
    yield '-'
    yield 'World'
    yield* calculation(20, 10)
}

const generator = main()

// Commented tests to verify the generated values
// console.log(generator.next()) // result { value: 'Hello', done: false }
// console.log(generator.next()) // result { value: '-', done: false }
// console.log(generator.next()) // result { value: 'World', done: false }
// console.log(generator.next()) // result { value: 200, done: false }
// console.log(generator.next()) // result { value: undefined, done: true }

// Assertions to verify the generated values
assert.deepStrictEqual(generator.next(), { value: 'Hello', done: false })
assert.deepStrictEqual(generator.next(), { value: '-', done: false })
assert.deepStrictEqual(generator.next(), { value: 'World', done: false })
assert.deepStrictEqual(generator.next(), { value: 200, done: false })
assert.deepStrictEqual(generator.next(), { value: undefined, done: true })

// Verification using Array.from
// console.log('Array.from', Array.from(main()))
assert.deepStrictEqual(Array.from(main()), ['Hello', '-', 'World', 200])

// Verification using spread operator
assert.deepStrictEqual([...main()], ['Hello', '-', 'World', 200])

// ----- async iterators
const { readFile, stat, readdir } = require('fs/promises')

// Generator function that returns promises
function* promisified() {
    yield readFile(__filename)
    yield Promise.resolve('Hey Dude')
}

// Test for promisified with spread operator
// console.log('promisifed', [...promisified()])

// Test with Promise.all and spread operator
// Promise.all([...promisified()]).then(results => console.log('promisifed', results))

// Asynchronous generator function for system information
async function* systemInfo() {
    const file = await readFile(__filename)
    yield { file: file.toString() }

    const { size } = await stat(__filename)
    yield { size }

    const dir = await readdir(__dirname)
    yield { dir }
}

// Test for promisified with for await
// ;(async () => {
//     for await (const item of promisified()){
//         console.log('for await', item.toString())
//     }
// })()

// Asynchronous execution for systemInfo
; (async () => {
    for await (const item of systemInfo()) {
        console.log('systemInfo', item)
    }
})()


