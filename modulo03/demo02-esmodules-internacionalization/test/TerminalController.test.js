import mocha from 'mocha'
const { describe, it, beforeEach } = mocha
import chai from 'chai'
const { expect } = chai
import sinon from 'sinon'
import TerminalController from '../src/terminalController.js'

describe('TerminalController', () => {
  beforeEach(() => {
    console.draft = sinon.stub().returns(() => { })
  })

  it('should handle empty database without errors', () => {
    const controller = new TerminalController()
    expect(() => controller.initializeTable([], 'pt-BR')).to.not.throw()
  })

  it('should update the table when adding an item', () => {
    const controller = new TerminalController()
    controller.initializeTable([], 'pt-BR')
    controller.print = sinon.spy()
    controller.updateTable({ id: 2, vehicles: 'Bike', kmTraveled: '3', from: '2020-01-01', to: '2020-01-02' })
    expect(controller.data.length).to.equal(1)
    expect(controller.print.called).to.be.true
  })
})
