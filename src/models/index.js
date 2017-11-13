import fs from 'fs'
import path from 'path'
import Sequelize from 'sequelize'
import config from '../config/environment'

const basename = path.basename(module.filename)
const db = {}

const sequelize = new Sequelize(config.database.schema, config.database.user, config.database.password, {
  dialect: config.database.dialect,
  host: config.database.host,
  port: config.database.port,
  logging: false
})

fs.readdirSync(__dirname).filter(function (file) {
  return (file.indexOf('.') !== 0) && (file !== 'index.js')
}).forEach(function (file) {
  var model = sequelize.import(path.join(__dirname, file))
  db[model.name] = model
})

Object.keys(db).forEach(function (modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate()
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
