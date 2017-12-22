'use strict'

const annotation = require('./annotation')

var annotationValidators = []
annotationValidators[annotation.enum['@notNull']] = {
  name: 'notNull'
}
annotationValidators[annotation.enum['@isNull']] = {
  name: 'isNull'
}
annotationValidators[annotation.enum['@notEmpty']] = {
  name: 'notEmpty'
}
annotationValidators[annotation.enum['@min']] = {
  name: 'min',
  params: ['min']
}
annotationValidators[annotation.enum['@max']] = {
  name: 'max',
  params: ['max']
}
annotationValidators[annotation.enum['@range']] = {
  name: 'range',
  params: ['min', 'max']
}
annotationValidators[annotation.enum['@pattern']] = {
  name: 'pattern',
  params: ['regex']
}
annotationValidators[annotation.enum['@email']] = {
  name: 'email'
}
annotationValidators[annotation.enum['@objectId']] = {
  name: 'objectId'
}
annotationValidators[annotation.enum['@String']] = {
  name: 'isString'
}
annotationValidators[annotation.enum['@Integer']] = {
  name: 'isInteger'
}
annotationValidators[annotation.enum['@Array']] = {
  name: 'isArray'
}

module.exports = {
  getValidator: (annotationId) => {
    return annotationValidators[annotationId]
  }
}
