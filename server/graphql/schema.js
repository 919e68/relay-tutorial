import {
  GraphQLSchema,
  GraphQLObjectType
} from 'graphql'

import users from './data/users'
import todos from './data/todos'

import { nodeField } from './types/definitions'

const Schema = new GraphQLSchema({
  query: new GraphQLObjectType({
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

export default Schema
