import {
  nodeDefinitions,
  fromGlobalId
} from 'graphql-relay'

import db from '../../models/db'
import { User, Todo, Viewer } from './types'

const { nodeInterface, nodeField } = nodeDefinitions(
  (globalId) => {
    const { type, id } = fromGlobalId(globalId)

    if (type === 'User') {
      return db.User.findById(id, { logging: false }).then(user => {
        return user
      })
    } else if (type == 'Todo') {
      return db.Todo.findById(id, { logging: false }).then(todo => {
        return todo
      })
    } else if (type == 'Viewer') {
      return { id: 'viewer' }
    }

    return null
  },
  (obj) => {
    if (obj instanceof User) {
      return User
    } else if (obj instanceof User) {
      return Todo
    }
    return null
  }
)

export { nodeInterface, nodeField }
