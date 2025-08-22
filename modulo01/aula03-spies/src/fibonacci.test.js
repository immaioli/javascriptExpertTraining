// Fibonacci: The next number in the sequence is always the sum of the previous two
// input: 3
// 0,1,1
// input: 5
// 0,1,1,2,3

const { createSandbox } = require('sinon');
const Fibonacci = require('./fibonacci');
const sinon = createSandbox();
const assert = require('assert');

; (async () => {
    {
        const fibonacci = new Fibonacci();
        const spy = sinon.spy(
            fibonacci,
            fibonacci.execute.name
        );
        // Sequence number: 5
        // [0] input = 5, current = 0, next = 1 = result 0
        // [1] input = 5, current = 1, next = 1 = result 1
        // [2] input = 5, current = 1, next = 2 = result 1
        // [3] input = 0, current = 2, next = 3 -> stop
        for (const seguenci of fibonacci.execute(3)) { }
        const expectedCallCount = 4
        assert.strictEqual(spy.callCount, expectedCallCount);
    }
    {
        const fibonacci = new Fibonacci();
        const spy = sinon.spy(
            fibonacci,
            fibonacci.execute.name
        );
        // Sequence number: 5
        // [0] input = 5, current = 0, next = 1 = result 0
        // [1] input = 5, current = 1, next = 1 = result 1
        // [2] input = 5, current = 1, next = 2 = result 1
        // [3] input = 0, current = 2, next = 3 -> stop
        
        const results = [...fibonacci.execute(5)]

        const expectedCallCount = 6
        assert.strictEqual(spy.callCount, expectedCallCount);
        const {args} = spy.getCall(2);
        const expectedParams = [3, 1, 2];
        assert.deepStrictEqual(args, expectedParams, "The arrays are not equal!");
        const expectedResults = [0, 1, 1, 2, 3];
        assert.deepStrictEqual(results, expectedResults, "The results are not equal!");
    }
})()
