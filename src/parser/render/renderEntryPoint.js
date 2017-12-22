const each = require('../../util/each')
const CR = '\n'

async function renderEntryPoint (contract) {
  let nameOfComponent = contract.name.toLowerCase()
  let nameOfEntryPoint = `${nameOfComponent}EntryPoint`

  let template = `const jaspe = require('jaspe')${CR}`
  template += `const EntryPoint = jaspe.EntryPoint${CR}`
  template += `let ${nameOfEntryPoint} = new EntryPoint()${CR}`

  each(contract.services, (index, service, next) => {
    let {name: serviceName} = service
    template += `${nameOfEntryPoint}.on(${serviceName}, () => {})${CR}`
  }, () => {
    template += `module.exports = ${nameOfEntryPoint}${CR}`

    return template;
  }) 
}

module.exports = renderEntryPoint
