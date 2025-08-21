const {readFile} = require('fs/promises')
const { error } = require('./constants')
const DEFAULT_OPTION = {
    maxLines: 3,
    headers: ['id', 'name', 'profession', 'age']
}

class File {
    static async csvToJSON(filePath){
        const content = await readFile(filePath, "utf-8")
        const validation = this.isValid(content)
        if(!validation.valid) throw new Error(validation.error)

        const result = this.parseCSVToJSON(content)
        return result
    }

    static isValid(csvString, options = DEFAULT_OPTION){
        // To view the contents of the file
        // fs.readFileSync('./mock/threeItems-valid.csv', 'utf8')

        // [0] = headers
        // [1] = line 1
        // [2] = line 2

        const [headers, ...fileWithoutHeader] = csvString.split(/\r?\n/)
        const isHeaderValid = headers === options.headers.join(',')

        if(!isHeaderValid) {
            return {
                error: error.FILE_FIELDS_ERROR_MESSAGE,
                valid: false
            }
        }

        if(
            !fileWithoutHeader.length ||
            fileWithoutHeader.length > options.maxLines
        ) {
            return {
                error: error.FILE_LENGTH_ERROR_MESSAGE,
                valid: false
            }
        }

        return {valid: true}

    }

    static parseCSVToJSON(csvString) {
        const lines = csvString.split(/\r?\n/)
        // remove the first line (header)
        const firstLine = lines.shift()
        const header = firstLine.split(',')

        const users = lines.map(line => {
            const columns = line.split(',')
            const user  = {}
            for(const index in columns){
                user[header[index]] = columns[index].trim()
            }
            return user
        })
        return users
    }
}

module.exports = File