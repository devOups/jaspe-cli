const Annotation = require(`../annotation/annotation`)
const AnnotationValidator = require(`../annotation/annotationValidator`)
const CR = '\n'
const TAB = '  '

let templateForParams = (annotation) => {
  let template = ''
  let validator = AnnotationValidator.getValidator(annotation.id)
  if (annotation.params.length !== 0) {
    template += `${TAB}${TAB}validator: v.${validator.name},${CR}`
    template += `${TAB}${TAB}params: {`
    for (let index = 0; index < validator.params.length; index++) {
      index === validator.params.length - 1
        ? template += `${validator.params[index]}: ${annotation.params[index]}`
        : template += `${validator.params[index]}: ${annotation.params[index]}, `
    }
    template += `}${CR}`
  } else {
    template += `${TAB}${TAB}validator: v.${validator.name}${CR}`
  }

  return template
}

async function renderContract(contractName, services) {
  let template = `const jaspe = require('jaspe')${CR}`
  template += `const Contract = jaspe.Contract${CR}`
  template += `const v = jaspe.validator${CR}`

  template += `${CR}`

  template += `let services = new Map()${CR}${CR}`

  for (let service of services) {
    let {name: serviceName, requirements} = service
    serviceName = serviceName.toLowerCase()
    template += `/**${CR}`
    template += ` * ${serviceName} service${CR}`
    template += ` */${CR}`
    template += `let ${serviceName}Requirements = new Map()${CR}`

    for (let requirement of requirements) {
      let {name, constraints} = requirement
      template += `${serviceName}Requirements.set('${name}', [${CR}`
      for (let index = 0; index < constraints.length; index++) {
        let annotation = Annotation.parse(constraints[index])          
        template += `${TAB}{${CR}`
        template += `${TAB}${TAB}name: '${annotation.name}',${CR}`

        template += templateForParams(annotation)

        index === constraints.length - 1
          ? template += `${TAB}}${CR}`
          : template += `${TAB}},${CR}`
      }
      template += `])${CR}`
    }
    template += `services.set('${serviceName}', ${serviceName}Requirements)${CR}${CR}`
  }
  template += `module.exports = new Contract('${contractName}', services)${CR}`

  return template
}

module.exports = renderContract
