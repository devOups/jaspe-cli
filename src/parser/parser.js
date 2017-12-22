const renderContract = require('./render/renderContract')
const renderEntryPoint = require('./render/renderEntryPoint')
const Component = require('./model/Component')
const each = require('../util/each')

module.exports = {
  parse: (contracts, options) => {
    if (options.verbose) {
      console.log('Starting create component task')
    }

    each(contracts, (index, contractPath, next) => {
      let contract = require(contractPath)
      let component = new Component(
        contract.name
      )

      Promise.all([
        renderContract(contract.name, contract.services),
        renderEntryPoint(contract)
      ])
      .then(([contract, entryPoint]) => {
        component.contract = contract
        component.entryPoint = entryPoint

        component.save('test').then(next)
      })

    }, () => {
      console.log('All components are generated')
    })
  }
}
