class Component {
  constructor(name) {
    this.name = name
    this.contract = null
    this.entrypoint = null
  }

  save (path) {
    return new Promise((resolve, reject) => {
      // console.log(this.contract)
      resolve(null, this)
    })
  }
}

module.exports = Component