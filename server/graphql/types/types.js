const graphql = require('graphql')
const graphqlRelay = require('graphql-relay')

const db = require('../../models/db')
const { nodeField, nodeInterface } = require('./definitions')

const User = new graphql.GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: graphqlRelay.globalIdField('User'),
    username: {
      type: graphql.GraphQLString,
      resolve: user => user.username
    },
    todos: {
      type: Todos,
      args: {
        ...graphqlRelay.connectionArgs,
      },
      resolve: (user, { ...args }) => {
        return new Promise((resolve, reject) => {
          db.Todo.findAll({
            where: {
              userId: user.id
            },
            logging: false
          }).then(todos => {
            resolve(graphqlRelay.connectionFromArray(todos, args))
          })
        })
      }
    }
  }),
  interfaces: [nodeInterface]
})


const Users = graphqlRelay.connectionDefinitions({ name: 'User', nodeType: User }).connectionType


const Todo = new graphql.GraphQLObjectType({
  name: 'Todo',
  fields: () => ({
    id: graphqlRelay.globalIdField('Todo'),
    userId: {
      type: graphql.GraphQLID,
      resolve: (todo) => todo.userId,
    },
    user: {
      type: User,
      resolve: (todo) => {
        return new new Promise((resolve, reject) => {
          resolve({ id: 99, username: 'wilson' })
        })
      }
    },
    text: {
      type: graphql.GraphQLString,
      resolve: (todo) => todo.text,
    }
  }),
  interfaces: [nodeInterface]
})


const Todos = graphqlRelay.connectionDefinitions({ name: 'Todo', nodeType: Todo }).connectionType

module.exports = {
  User,
  Users,
  Todo,
  Todos
}
