import React from 'react'
import { Link } from 'react-router-dom'

import {
  createFragmentContainer,
  graphql,
} from 'react-relay'

class ViewUser extends React.Component {
  render() {
    return (
      <div>
        <h3>User Single Page</h3>
        <Link to='/'>Main</Link>
        <form>
          <div>
            <input type='text' name='username' placeholder='username' />
          </div>

          <div>
            <input type='text' name='email' placeholder='email' />
          </div>

          <div>
            <input type='text' name='firstName' placeholder='first name' />
          </div>

          <div>
            <input type='text' name='lastName' placeholder='last name' />
          </div>

          <div>
            <input type='password' name='password' placeholder='password' />
          </div>
        </form>
      </div>
    )
  }
}

export default ViewUser
// export default createFragmentContainer(ViewUser, {
//   user: graphql`
//     fragment user_user on User {
//       id
//       username
//       todos {
//         ...list_todos
//       }
//     }
//   `,
// })
