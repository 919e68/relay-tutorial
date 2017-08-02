import {
  GraphQLID,
  GraphQLString,
  GraphQLObjectType,
  GraphQLInputObjectType
} from 'graphql'

import {
  globalIdField,
  connectionArgs,
  connectionFromArray,
  connectionDefinitions
} from 'graphql-relay'

import { nodeField, nodeInterface } from './definitions'
import db from '../../models/db'

// = user type
const User = {
  Type: new GraphQLObjectType({
    name: 'User',
    fields: () => ({
      id: globalIdField('User'),
      userId: {
        type: GraphQLID,
        resolve: user => user.id
      },
      username: {
        type: GraphQLString,
        resolve: user => user.username
      },
      email: {
        type: GraphQLString,
        resolve: user => user.email
      },
      firstName: {
        type: GraphQLString,
        resolve: user => user.firstName
      },
      lastName: {
        type: GraphQLString,
        resolve: user => user.lastName
      },
      todos: {
        type: Todos,
        args: {
          ...connectionArgs,
        },
        resolve: (user, { ...args }) => {
          return new Promise((resolve, reject) => {
            db.Todo.findAll({
              where: {
                userId: user.id
              },
              logging: false
            }).then(todos => {
              resolve(connectionFromArray(todos, args))
            })
          })
        }
      }
    }),
    interfaces: [nodeInterface]
  }),

  Input: new GraphQLInputObjectType({
    name: 'UserInput',
    fields: () => ({
      username: {
        type: GraphQLString
      },
      email: {
        type: GraphQLString
      },
      firstName: {
        type: GraphQLString
      },
      lastName: {
        type: GraphQLString
      }
    })
  })
}

const Users = connectionDefinitions({ name: 'User', nodeType: User.Type }).connectionType


// = todo type
const Todo = new GraphQLObjectType({
  name: 'Todo',
  fields: () => ({
    id: globalIdField('Todo'),
    userId: {
      type: GraphQLID,
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
      type: GraphQLString,
      resolve: (todo) => todo.text,
    }
  }),
  interfaces: [nodeInterface]
})

const Todos = connectionDefinitions({ name: 'Todo', nodeType: Todo }).connectionType

export {
  User,
  Users,
  Todo,
  Todos
}
