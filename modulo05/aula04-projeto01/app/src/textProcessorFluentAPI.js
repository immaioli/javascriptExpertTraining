const Person = require("./person")
const { evaluateRegex } = require("./util")
/**
 * The goal of the Fluent API is to execute tasks
 * like a pipeline, step by step,
 * and at the end, call build. VERY similar to the Builder pattern.
 * The difference is that here it is about processes, the Builder is about object construction.
 */
class TextProcessorFluentAPI {
    // private property
    #content
    constructor(content) {
        this.#content = content
    }

    extractPeopleData() {
        /**
         * ?<= means it will extract the data that comes after this group
         * [contratante|contratada] either one or the other (and has the flag at the end of the expression to capture uppercase and lowercase)
         * :\s{1} will look for the literal colon character followed by a space
         * all above is inside parentheses to say "we will capture from here forward"
         *
         * (?!s) negative look around, will ignore the contractors at the end of the document (which have only space ahead of them)
         * .*\n captures anything until the first \n
         * .*? non-greedy, this ? makes it stop at the first occurrence, avoiding looping
         *
         * $ indicates the search ends at the end of the line
         * g -> global
         * m -> multiline
         * i -> insensitive
         */
        const matchPerson = evaluateRegex(/(?<=[contratante|contratada]:\s{1})(?!\s)(.*\n.*?)$/gmi)

        // matches to find the entire string containing the data we need
        const onlyPerson = this.#content.match(matchPerson)
        // console.log('onlyPerson', matchPerson.test(this.#content))
        this.#content = onlyPerson
        return this
    }

    divideTextInColumns() {
        const splitRegex = evaluateRegex(/,/)
        this.#content = this.#content.map(line => line.split(splitRegex))
        return this
    }

    removeEmptyCharacters() {
        const trimSpaces = evaluateRegex(/^\s+|\s+$|\n/)
        this.#content = this.#content.map(line => line.map(item => item.replace(trimSpaces, "")))

        return this
    }

    mapPerson() {
        // Passes the array of items to the Person constructor
        this.#content = this.#content.map(line => new Person(line))
        return this
    }

    build() {
        return this.#content
    }
}

module.exports = TextProcessorFluentAPI
