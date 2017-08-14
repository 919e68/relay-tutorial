import React from 'react'
import { Link } from 'react-router-dom'

import {
  createFragmentContainer,
  graphql,
} from 'react-relay'



class User extends React.Component {
  render() {
    let user = this.props.user
    return (
      <div>
        <Link to={`/user/${user.id}`}>{user.id}</Link>
        <h3>{user.username}</h3>
      </div>
    )
  }
}

export default createFragmentContainer(User, {
  user: graphql`
    fragment User_user on User {
      id
      username
      todos {
        ...TodoList_todos
      }
    }
  `,
})
