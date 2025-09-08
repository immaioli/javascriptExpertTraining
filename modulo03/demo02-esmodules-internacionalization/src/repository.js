import { writeFile, readFile } from 'fs/promises'
import { fileURLToPath } from 'node:url'

export const save = async (data) => {
    // Não tem no EsModule: __filename, __dirname
    const databaseFile = fileURLToPath(new URL('../database.json', new URL('.', import.meta.url))) 
    const currentData = JSON.parse((await readFile(databaseFile)))
    currentData.push(data)

    await writeFile(databaseFile, JSON.stringify(currentData))
}

