import {
  connectionArgs,
  connectionFromArray,
  mutationWithClientMutationId
} from 'graphql-relay'

import {
  GraphQLID
} from 'graphql'

import db from '../../models/db'
import { User, Users } from '../types/types'

export default {
  Query: {
    user: {
      type: User,
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

      }
    })
  }
}




const GraphQLAddTodoMutation = mutationWithClientMutationId({
  name: 'AddTodo',
  inputFields: {
    text: { type: new GraphQLNonNull(GraphQLString) },
  },
  outputFields: {
    todoEdge: {
      type: GraphQLTodoEdge,
      resolve: ({localTodoId}) => {
        const todo = getTodo(localTodoId);
        return {
          cursor: cursorForObjectInConnection(getTodos(), todo),
          node: todo,
        };
      },
    },
    viewer: {
      type: GraphQLUser,
      resolve: () => getViewer(),
    },
  },
  mutateAndGetPayload: ({text}) => {
    const localTodoId = addTodo(text);
    return {localTodoId};
  },
});
