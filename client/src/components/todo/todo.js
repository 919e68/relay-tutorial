import React from 'react'

import {
  createFragmentContainer,
  graphql,
} from 'react-relay'

class Todo extends React.Component {
  render() {
    return (
      <div>
        <h1>todo</h1>
      </div>
    )
  }
}

export default createFragmentContainer(Todo, {
  todo: graphql`
    fragment todo_todo on Todo {
      id
      text
    }
  `,
})
