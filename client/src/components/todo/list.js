import React from 'react'

import {
  createFragmentContainer,
  graphql,
} from 'react-relay'

import Todo from './todo'

class ListTodo extends React.Component {
  render() {
    return (
      <div>
        list todo
      </div>
    )
  }
}

export default createFragmentContainer(ListTodo, {
  todos: graphql`
    fragment list_todos on TodoConnection {
      edges {
        node {
          ...todo_todo
        }
      }
    }
  `,
})
