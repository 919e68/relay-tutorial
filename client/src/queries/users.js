import {  graphql } from 'react-relay'

export default graphql`
  query usersQuery {
    users {
      ...list_users
    }
  }
`
