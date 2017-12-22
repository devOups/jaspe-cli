const v = require('../../../src/validator')
const Contract = require('../../../src/core/contract')

// let services = new Map()

// /**
//  * Create service
//  */
// let createRequirements = new Map()
// createRequirements.set('username', [
//   {
//     name: 'typeOf string',
//     validator: v.typeOf,
//     params: {typeOf: 'string'}
//   },
//   {
//     name: 'notNull',
//     validator: v.notNull
//   },
//   {
//     name: 'notEmpty',
//     validator: v.notEmpty
//   }
// ])

// createRequirements.set('email', [
//   {
//     name: 'typeOf string',
//     validator: v.typeOf,
//     params: {typeOf: 'string'}
//   },
//     {
//     name: 'notNull',
//     validator: v.notNull
//   },
//   {
//     name: 'notEmpty',
//     validator: v.notEmpty
//   },
//   {
//     name: 'email',
//     validator: v.email
//   }
// ])

// createRequirements.set('age', [
//   {
//     name: '@Interger',
//     validator: v.isInteger
//   },
//   {
//     name: '@notNull',
//     validator: v.notNull
//   },
//   {
//     name: '@range(0, 110)',
//     validator: v.range,
//     params: [0, 110]
//   }

// ])
// services.set('create', createRequirements)

// /**
//  * Delete service
//  */
// let deleteRequirements = new Map()
// deleteRequirements.set('accountId', [
//   {
//     name: 'typeOf string',
//     validator: v.typeOf,
//     params: {typeOf: 'string'}
//   },
//   {
//     name: 'notNull',
//     validator: v.notNull

//   },
//   {
//     name: 'notEmpty',
//     validator: v.notEmpty
//   }
// ])
// services.set('delete', deleteRequirements)


// module.exports = new Contract('AccountContract', services)
// const jaspe = require('jaspe')
// const Contract = jaspe.Contract
// const v = jaspe.validator

let services = new Map()

/** 
 * create service
 */ 
let createRequirements = new Map()
createRequirements.set('username', [
  {
    name: '@String',
    validator: v.isString
  },
  {
    name: '@notNull',
    validator: v.notNull
  },
  {
    name: '@notEmpty',
    validator: v.notEmpty
  }
])
createRequirements.set('email', [
  {
    name: '@String',
    validator: v.isString
  },
  {
    name: '@notNull',
    validator: v.notNull
  },
  {
    name: '@notEmpty',
    validator: v.notEmpty
  },
  {
    name: '@email',
    validator: v.email
  }
])
createRequirements.set('age', [
  {
    name: '@Integer',
    validator: v.isInteger
  },
  {
    name: '@notNull',
    validator: v.notNull
  },
  {
    name: '@range',
    validator: v.range,
    params: {min: 0, max: 110}
  }
])
services.set('create', createRequirements)

/** 
 * delete service
 */ 
let deleteRequirements = new Map()
deleteRequirements.set('accountId', [
  {
    name: '@String',
    validator: v.isString
  },
  {
    name: '@notNull',
    validator: v.notNull
  },
  {
    name: '@notEmpty',
    validator: v.notEmpty
  },
  {
    name: '@objectId',
    validator: v.objectId
  }
])
services.set('delete', deleteRequirements)

module.exports = new Contract('AccountContract', services)
