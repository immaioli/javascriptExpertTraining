'use strict';

const { watch, promises: { readFile } } = require('fs')

class File {
    watch(event, filename) {
        console.log('this', this)
        console.log('arguments', Array.prototype.slice.call(arguments))
        this.showContent(filename)
    }

    async showContent(filename) {
        console.log((await readFile(filename)).toString())
    }
}

// watch(__filename, async (event, filename) => {
//     console.log((await readFile(filename)).toString())
// })

const file = new File()
// Dessa forma, ele ignora o 'this' da class File
// herda o this do watch
// watch(__filename, file.watch)

// alterativa para não herdar o 'this' da função
// mais fica feio"
// watch(__filename, (event, filename) => file.watch(event, filename))

// Podemos deixar explicito qual é o contexto que a função deve seguir
// o bind retorna uma função com o 'this' que se mantém de File, ignorando o watch
// watch(__filename, file.watch.bind(file))

file.watch.call({ showContent: () => console.log('call: hey sinon!') }, null, __filename)
file.watch.apply({ showContent: () => console.log('apply: hey sinon!') }, [null, __filename])

// --------------------------------------------------------------
