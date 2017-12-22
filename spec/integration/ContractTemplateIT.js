'use strict'

const renderContract = require('../../src/parser/render/renderContract.js')
const fs = require('fs')
const crypto = require('crypto')
const path = require('path')

describe('RenderContract - Testing render method', function () {
  it('with json contract', async function () {
    // given path for contract.json
    let pathOfContract = './contract/contract_1.json'

    // and load contract.json file 
    let contract = require(pathOfContract)

    // when
    let result = await renderContract(
      contract.name,
      contract.services
    )

    // and compute md5 for result template hash
    let hashStr = crypto.createHash('md5')
    hashStr.update(result)

    // and compute md5 for ref file
    let hash = crypto.createHash('md5')
    let refContract = fs.readFileSync(path.join(__dirname, 'ref/ref_contract_1.js'))
    hash.update(refContract)

    // then
    expect(hashStr.digest('hex')).toBe(hash.digest('hex'))
  })
})