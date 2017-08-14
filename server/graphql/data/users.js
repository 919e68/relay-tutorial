import {
  connectionArgs,
  connectionFromArray,
  mutationWithClientMutationId,
  cursorForObjectInConnection
} from 'graphql-relay'

import {
  GraphQLID,
  GraphQLObjectType
} from 'graphql'

import db from '../../models/db'
import { User, Users } from '../types/types'

export default {
  Query: {
    viewer: {
      type: new GraphQLObjectType({
        name: 'Viewer',
        fields: () => ({
          id: {
            type: GraphQLID,
            resolve: () => 'viewer'
          },
          users: {
            type: Users,
            args: {
              ...connectionArgs,
            },
            resolve: (root, { ...args }) => {
              return new Promise((resolve, reject) => {
                db.User.findAll({
                  logging: false
                }).then(users => {
                  resolve(connectionFromArray(users, args))
                })
              })
            }
          }
        })
      }),
      resolve: () => {
        return { }
      }
    },

    user: {
      type: User.Type,
      args: {
        id: {
          name: 'id',
          type: GraphQLID
        }
      },
      resolve: (root, { id }) => {
        return new Promise((resolve, reject) => {
          db.User.findOne({ logging: false }).then(user => {
            resolve(user)
          })
        })
      }
    }
  },

  Mutation: {
    createUser: mutationWithClientMutationId({
      name: 'CreateUser',
      inputFields: User.Input,
      outputFields: {
        user: {
          type: User.Type
        }
      },
      mutateAndGetPayload: (input) => {
        return new Promise((resolve, reject) => {
          db.User.create(input).then(user => {
            resolve(user)
          }).catch(err => {
            reject(err)
          })
        })
      }
    })
  }
}
