"use strict";var mocha;module.link('mocha',{default(v){mocha=v}},0);var chai;module.link('chai',{default(v){chai=v}},1);var sinon;module.link('sinon',{default(v){sinon=v}},2);var TerminalController;module.link('../src/terminalController.js',{default(v){TerminalController=v}},3);
const { describe, it } = mocha

const { expect } = chai



describe('TerminalController', () => {
  it('should handle empty database without errors', () => {
    const controller = new TerminalController()
    // Mock console.draft
    console.draft = sinon.stub().returns(() => {})
    expect(() => controller.initializeTable([], 'pt-BR')).to.not.throw()
  })

  it('should update the table when adding an item', () => {
    const controller = new TerminalController()
    // Mock console.draft
    console.draft = sinon.stub().returns(() => {})
    controller.initializeTable([], 'pt-BR')
    // Mock the print (console.draft)
    controller.print = sinon.spy()
    controller.updateTable({ id: 2, vehicles: 'Bike', kmTraveled: '3', from: '2020-01-01', to: '2020-01-02' })
    expect(controller.data.length).to.equal(1)
    expect(controller.print.called).to.be.true
  })
})
