import {
  connectionArgs,
  connectionFromArray,
  mutationWithClientMutationId
} from 'graphql-relay'

import {
  GraphQLID,
  GraphQLString
} from 'graphql'

import db from '../../models/db'
import { User, Users } from '../types/types'

export default {
  Query: {
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
  },

  Mutation: {
    createUser: mutationWithClientMutationId({
      name: 'CreateUser',
      inputFields: {
        username: {
          type: GraphQLString
        }
      },
      outputFields: {
        user: {
          type: User.Type
        }
      },
      mutateAndGetPayload: () => {
        return {
          user: {
            username: 'red'
          }
        }
      }
    })
  }
}
