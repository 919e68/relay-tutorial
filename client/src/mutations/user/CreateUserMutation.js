import {
  commitMutation,
  graphql,
} from 'react-relay'

import environment from '../../config/environment'

import { ConnectionHandler } from 'relay-runtime'

const mutation = graphql`
  mutation CreateUserMutation($input: CreateUserInput!) {
    createUser(input: $input) {
      user {
        id
        username
        email
        firstName
        lastName
      }
    }
  }
`

let tempID = 0

export default function CreatePostMutation(input, nodeId, callback) {
  const variables = {
    input: input,
  }
  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response) => {
        callback(input)
      },
      updater: (store) => {
        const payload = store.getRootField('createUser')
        const newEdge = payload.getLinkedRecord('userEdge')

        const proxy = store.get(nodeId)
        const conn = ConnectionHandler.getConnection(proxy, 'UserList_users')
        ConnectionHandler.insertEdgeAfter(conn, newEdge)
      },
      optimisticUpdater: (store) => {
        const id = 'client:newUser:' + tempID++
        const node = store.create(id, 'User')
        node.setValue(input.username, 'username')
        node.setValue(id, 'id')
        const newEdge = store.create(
          'client:newEdge:' + tempID++,
          'UserEdge',
        )
        newEdge.setLinkedRecord(node, 'node')

        const proxy = store.get(nodeId)
        const conn = ConnectionHandler.getConnection(proxy, 'UserList_users')
        ConnectionHandler.insertEdgeAfter(conn, newEdge)
      },
    },
  )
}
