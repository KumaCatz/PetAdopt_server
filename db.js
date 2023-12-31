const fs = require('fs')
const crypto = require('crypto')

class DB {
  constructor(name) {
    this.name = name
    this.path = `db/${name}.json`
  }

  getData = () => {
    const json = fs.readFileSync(this.path)
    const parsed = JSON.parse(json)
    return parsed
  }

  saveData = (data) => {
    fs.writeFileSync(this.path, JSON.stringify(data, null, 2))
  }

  addData = (body) => {
    const arr = this.getData()
    const newId = crypto.randomUUID()
    console.log(newId)
    arr.push({
      id: newId,
      ...body
    })
    this.saveData(arr)
    return newId
  }
  
  compareDataByKeyValue = (body, keyProp) => {
    const arr = this.getData()

    return arr.some(ele => ele[keyProp] === body[keyProp])
  }

  getDataByKeyValue = (body, keyProp) => {
    const arr = this.getData()

    return arr.find(ele => ele[keyProp] === body[keyProp])
  }
}

module.exports = DB