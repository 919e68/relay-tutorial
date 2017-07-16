import React from 'react'
import ReactDOM from 'react-dom'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import TodoApp from './components/apps/todo-app'
import ViewUser from './components/apps/view-user'

ReactDOM.render((
  <Router>
    <Switch>
      <Route exact path='/' component={TodoApp} />
      <Route path='/user/:id' component={ViewUser} />
    </Switch>
  </Router>
), document.getElementById('app'))
