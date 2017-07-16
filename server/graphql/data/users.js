const graphql = require('graphql')
const graphqlRelay = require('graphql-relay')

const db = require('../../models/db')
const { User, Users } = require('../types/types')

module.exports = {
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
        ...graphqlRelay.connectionArgs,
      },
      resolve: (root, { ...args }) => {
        return new Promise((resolve, reject) => {
          db.User.findAll({
            logging: false
          }).then(users => {
            resolve(graphqlRelay.connectionFromArray(users, args))
          })
        })
      }
    }
  }
}
