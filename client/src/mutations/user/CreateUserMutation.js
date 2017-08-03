import {
  commitMutation,
  graphql,
} from 'react-relay'

import environment from '../../environment'

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

export default function CreatePostMutation(username, email, firstName, lastName, nodeId, callback) {
  const variables = {
    input: {
      username,
      email,
      firstName,
      lastName,
      clientMutationId: ""
    },
  }
  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response) => {
        console.log(response, environment)
        callback()
      },
      onError: err => console.error(err),
      optimisticUpdater: (proxyStore) => {
        // 1 - create the `newPost` as a mock that can be added to the store
        // const id = 'client:newUser:' + tempID++
        // const newUser = proxyStore.create(id, 'User')
        // newPost.setValue(id, 'id')
        // newPost.setValue(username, 'username')
        // newPost.setValue(email, 'email')
        // newPost.setValue(firstName, 'firstName')
        // newPost.setValue(lastName, 'lastName')

        // 2 - add `newPost` to the store
        // const viewerProxy = proxyStore.get(nodeId)
        // const connection = ConnectionHandler.getConnection(viewerProxy, 'list_users')
        // if (connection) {
          // ConnectionHandler.insertEdgeAfter(connection, newUser)
        // }
      },
      updater: (proxyStore) => {
        // 1 - retrieve the `newPost` from the server response
        // const createUserField = proxyStore.getRootField('createUser')
        // const newUser = createPostField.getLinkedRecord('user')

        // 2 - add `newPost` to the store
        // const viewerProxy = proxyStore.get(nodeId)
        // const connection = ConnectionHandler.getConnection(viewerProxy, 'list_users')
        // if (connection) {
          // ConnectionHandler.insertEdgeAfter(connection, newUser)
        // }
      },
    },
  )
}
