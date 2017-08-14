import { graphql } from 'react-relay'

export default graphql`
  query UsersQuery {
    viewer {
      ...UserList_viewer
    }
  }
`
