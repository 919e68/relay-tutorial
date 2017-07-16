const graphqlRelay = require('graphql-relay')

const db = require('../../models/db')
const { User, Todo } = require('./types')

const { nodeInterface, nodeField } = graphqlRelay.nodeDefinitions(
  (globalId) => {
    const { type, id } = graphqlRelay.fromGlobalId(globalId)

    if (type === 'User') {
      return db.User.findById(id, { logging: false }).then(user => {
        return user
      })
    } else if (type == 'Todo') {
      return db.Todo.findById(id, { logging: false }).then(todo => {
        return todo
      })
    }

    return null
  },
  (obj) => {
    if (obj instanceof User) {
      return User
    } else if (obj instanceof User) {
      return Todo
    }
    return null
  }
)

module.exports = { nodeInterface, nodeField }
