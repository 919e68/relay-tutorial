const graphql = require('graphql')
const graphqlRelay = require('graphql-relay')

const db = require('../../models/db')
const { Todo, Todos } = require('../types/types')

module.exports = {
  Query: {
    todo: {
      type: Todo,
      resolve: (root) => {
        return new Promise((resolve, reject) => {
          db.Todo.findOne({ logging: false }).then(data => {
            resolve(data)
          })
        })
      }
    },

    todos: {
      type: Todos,
      args: {
        ...graphqlRelay.connectionArgs,
      },
      resolve: (root, { ...args }) => {
        return new Promise((resolve, reject) => {
          db.Todo.findAll({
            logging: false
          }).then(todos => {
            resolve(graphqlRelay.connectionFromArray(todos, args))
          })
        })
      }
    }
  }
}
