import {
  connectionArgs,
  connectionFromArray
} from 'graphql-relay'

import db from '../../models/db'
import { User, Users } from '../types/types'

export default {
  Query: {
    user: {
      type: User,
      resolve: (root) => {
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
  }
}
