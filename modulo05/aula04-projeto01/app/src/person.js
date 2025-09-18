const { evaluateRegex } = require("./util")

class Person {

    // Find: (\w+):\s.*
    // Replace: $1,

    constructor(content) {
        let properties;
        if (Array.isArray(content[0])) {
            [properties] = content;
        } else {
            properties = content;
        }
        const [nome, nacionalidade, estadoCivil, documento, rua, numero, bairro, estado] = properties

        // ^ -> beginning of the string
        // + -> one or more occurrences
        // (\w{1}) -> captures only the first letter and puts it in a group
        // (a-zA-Z) finds uppercase or lowercase letters, we add + to capture all until the special character
        // g -> all occurrences found

        const firstLetterExp = evaluateRegex(/^(\w{1})([a-zA-Z]+$)/g)
        const formatFirstLetter = (prop) => {
            return prop.replace(firstLetterExp, (fullMatch, group1, group2, index) => {
                return `${group1.toUpperCase()}${group2.toLowerCase()}`
            })
        }

        // Find: (\w+),
        // Replace: this.$1 = $1
        this.nome = nome
        this.nacionalidade = formatFirstLetter(nacionalidade)
        this.estadoCivil = formatFirstLetter(estadoCivil)
        // Everything that is not a digit becomes empty
        // /g - serves to remove all occurrences found
        this.documento = documento.replace(evaluateRegex(/\D/g), "")
        // Starts searching after " a " and gets everything ahead
        // (?<= makes it ignore everything before this match), known as positive lookBehind
        this.rua = rua.match(evaluateRegex(/(?<=\sa\s).*$/)).join()
        this.numero = numero
        // Starts searching after the space, gets any letter or digit until the end of the line (could be .* too)
        this.bairro = bairro.match(evaluateRegex(/(?<=\s).*$/)).join()
        // Remove the literal dot (.) from the end of the sentence
        this.estado = estado.replace(evaluateRegex(/\.$/), "")
    }
}

module.exports = Person