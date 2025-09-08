import mocha from 'mocha'
const { describe, it } = mocha
import chai from 'chai'
const { expect } = chai
import { save } from '../src/repository.js'
import { readFile } from 'fs/promises'
import fs from 'fs'
import { fileURLToPath } from 'node:url'

describe('repository', () => {
    it('should save a record in database.json', async () => {
        const obj = { id: '999', vehicles: ['X'], kmTraveled: '1', from: '2020-01-01', to: '2020-01-02' }
        await save(obj)
        const databaseFile = fileURLToPath(new URL('../database.json', new URL('.', import.meta.url)))
        const data = JSON.parse(await readFile(databaseFile))
        const found = data.some(r => r.id === '999')
        expect(found).to.be.true
        // Cleanup: remove the inserted record after the test
        const filteredData = data.filter(r => r.id !== '999')
        await fs.promises.writeFile(databaseFile, JSON.stringify(filteredData, null, 2))
    })
})
