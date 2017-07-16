const graphql = require('graphql')
const graphqlRelay = require('graphql-relay')

const users = require('./data/users')
const todos = require('./data/todos')

const { nodeField } = require('./types/definitions')

module.exports = new graphql.GraphQLSchema({
  query: new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
      user: users.Query.user,
      users: users.Query.users,

      todo: todos.Query.todo,
      todos: todos.Query.todos,
      node: nodeField
    }
  })
})
