const TextProcessorFluentAPI = require('./textProcessorFluentAPI')

class TextProcessorFacade {
    #textprocessorFluentAPI
    constructor(text) {
        this.#textprocessorFluentAPI = new TextProcessorFluentAPI(text)
    }

    getPeopleFromPDF() {
        return this.#textprocessorFluentAPI
            .extractPeopleData()
            .divideTextInColumns()
            .removeEmptyCharacters()
            .mapPerson()
            .build()
    }
}

module.exports = TextProcessorFacade