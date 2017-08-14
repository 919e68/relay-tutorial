import db from '../server/models/db'

db.User.findAll({
  logging: false
}).then(users => {
  console.log(JSON.stringify(users, null, 2))
})
