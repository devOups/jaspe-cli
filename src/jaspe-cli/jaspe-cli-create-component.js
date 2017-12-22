'use strict'

const program = require('commander')
const parser = require('../parser/parser')

program
  .version('0.1.0')
  .option('-v, --verbose', 'Verbose mode')
  .option('-r, --register <filename>', 'Load contracts files from register.json file')
  .option('-f, --files <items>', 'Load contracts files from file list', (val) => {
    return val.split(',')
  })
  .parse(process.argv)

let verbose = false
let contracts = []

if (program.verbose) {
  console.log('verbose mode')
  verbose = true
}

if (program.register) {
  contracts = require(program.register)
}

if (program.args && !program.register) {
  contracts = program.args

  if (contracts.length < 1) {
    console.error('contracts file required')
    process.exit(1)
  }
}

parser.parse(contracts, {verbose, pathname: __filename})
