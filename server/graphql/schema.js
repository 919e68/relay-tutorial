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
      viewer: users.Query.viewer,
      node: nodeField
    }
  }),

  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      createUser: users.Mutation.createUser
    }
  })


})

export default Schema
