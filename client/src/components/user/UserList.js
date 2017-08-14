import React from 'react'

import {
  createFragmentContainer,
  graphql,
} from 'react-relay'

import User from './User'
import CreateUserMutation from '../../mutations/user/CreateUserMutation'

class UserList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: null
    }
  }

  _handleUsernameChange(e) {
    this.setState({ username: e.target.value })
  }

  _handleSaveClick() {
    const { username } = this.state

    CreateUserMutation({ username: username}, this.props.viewer.id, (input) => {
      console.log(input)
    })
  }

  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.viewer.users.edges.map((user, i) =>
          <User key={`user-${i}`} user={user.node}/>
        )}
        <div>
          <input type='text' name='username' onChange={this._handleUsernameChange.bind(this)}/>
          <button id='save' onClick={this._handleSaveClick.bind(this)}>save</button>
        </div>
      </div>
    )
  }
}

export default createFragmentContainer(UserList, {
  viewer: graphql`
    fragment UserList_viewer on Viewer {
      id
      users(first: 2147483647) @connection(key: "UserList_users") {
        edges {
          node {
            ...User_user
          }
        }
      }
    }
  `,
})
