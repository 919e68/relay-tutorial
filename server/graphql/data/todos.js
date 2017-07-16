import {
  connectionArgs,
  connectionFromArray
} from 'graphql-relay'

import db from '../../models/db'
import { Todo, Todos } from '../types/types'

export default {
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
        ...connectionArgs,
      },
      resolve: (root, { ...args }) => {
        return new Promise((resolve, reject) => {
          db.Todo.findAll({
            logging: false
          }).then(todos => {
            resolve(connectionFromArray(todos, args))
          })
        })
      }
    }
  }
}
