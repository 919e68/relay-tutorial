import React from 'react'

import {
  createFragmentContainer,
  graphql,
} from 'react-relay'

import User from './user'

class ListUser extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        {
          this.props.users.edges.map((user, i) =>
            <div key={i}>
              <User user={user.node}/>
            </div>
          )
        }
      </div>
    )
  }
}

export default createFragmentContainer(ListUser, {
  users: graphql`
    fragment list_users on UserConnection {
      edges {
        node {
          ...user_user
        }
      }
    }
  `,
})
