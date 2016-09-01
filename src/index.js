import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {Router, Route, hashHistory} from 'react-router'

import reducers from './reducers'
import Header from './components/Header'
import QuestionListContainer from './containers/QuestionListContainer'
import QuestionDetailsContainer from './containers/QuestionDetailsContainer'

let store = createStore(reducers, window.devToolsExtension && window.devToolsExtension())

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route component={Header}>
          <Route path='/' component={QuestionListContainer} />
          <Route path='/questiondetails' component={QuestionDetailsContainer} />
        </Route>
      </Router>
    </Provider>
    , document.getElementById('app'))
})
