#!/usr/bin/env node
'use strict'

const program = require('commander')

program
  .version('0.0.0')
  .option('-v', '--verbose', 'verbose mode')

program
  .command('create-component [contract]', 'create one or more components', {isDefault: true})
  .alias('cc')

program.parse(process.argv)
