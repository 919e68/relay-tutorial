import React from 'react'

import {
  createFragmentContainer,
  graphql,
} from 'react-relay'

import Todo from './Todo'

class TodoList extends React.Component {
  render() {
    return (
      <div>
        list todo
      </div>
    )
  }
}

export default createFragmentContainer(TodoList, {
  todos: graphql`
    fragment TodoList_todos on TodoConnection {
      edges {
        node {
          ...Todo_todo
        }
      }
    }
  `,
})
