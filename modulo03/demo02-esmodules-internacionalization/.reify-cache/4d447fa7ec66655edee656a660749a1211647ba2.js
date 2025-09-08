"use strict";var mocha;module.link('mocha',{default(v){mocha=v}},0);var chai;module.link('chai',{default(v){chai=v}},1);var Person;module.link("../src/person.js",{default(v){Person=v}},2);
const { describe, it } = mocha

const { expect } = chai


// Test: Malformed input in generateInstanceFromString
describe('Person.generateInstanceFromString', () => {
    it('should handle malformed string', () => {
        // Fewer fields than expected
        const text = "1 Bike 2000 2020-01-01"
        expect(() => Person.generateInstanceFromString(text)).to.throw()
    })

    it('should handle empty vehicles field', () => {
        const text = "1  2000 2020-01-01 2020-02-01"
        const person = Person.generateInstanceFromString(text)
        expect(person.vehicles).to.deep.equal([''])
    })

    it('should handle non-numeric kmTraveled', () => {
        const text = "1 Bike,Carro abc 2020-01-01 2020-02-01"
        const person = Person.generateInstanceFromString(text)
        expect(person.kmTraveled).to.equal('abc')
    })

    it('should handle invalid dates', () => {
        const text = "1 Bike,Carro 20000 invalid-date 2020-02-01"
        const person = Person.generateInstanceFromString(text)
        expect(isNaN(new Date(person.from).getTime())).to.be.true
    })
})

// Test: Internationalization and formatting in different languages
describe('Person.formatted', () => {
    const defaultPerson = new Person({
        from: '2020-01-01',
        to: '2020-02-01',
        vehicles: ['Bike', 'Carro'],
        kmTraveled: '20000',
        id: '1'
    })

    it('should format for pt-BR', () => {
        const result = defaultPerson.formatted("pt-BR")
        expect(result.vehicles).to.equal('Bike e Carro')
        expect(result.from).to.include('janeiro')
        expect(result.kmTraveled).to.equal('20.000 km')
    })

    it('should format for en-US', () => {
        const result = defaultPerson.formatted("en-US")
        expect(result.vehicles).to.equal('Bike and Carro')
        expect(result.from).to.include('January')
        expect(result.kmTraveled).to.equal('20,000 km')
    })

    it('should format for es-ES', () => {
        const result = defaultPerson.formatted("es-ES")
        expect(result.vehicles).to.equal('Bike y Carro')
        expect(result.from).to.include('enero')
        expect(result.kmTraveled).to.equal('20.000 km')
    })
})

