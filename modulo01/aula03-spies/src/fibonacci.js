class Fibonacci {
    * execute(input, current = 0, next = 1) {
        // process the entire sequence and stop
        if (input === 0) {
            return
        }
        // return the value
        yield current;

        // delegate the function but do not return the value
        yield* this.execute(input - 1, next, current + next);
    }
}

module.exports = Fibonacci;