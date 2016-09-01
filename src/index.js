import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import {Router, Route, hashHistory} from 'react-router'
import thunkMiddleware from 'redux-thunk'

import reducers from './reducers'
import Header from './components/Header'
import Home from './containers/Home'
import QuestionDetailsContainer from './containers/QuestionDetailsContainer'

let store = createStore(reducers, compose(
  applyMiddleware(thunkMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route component={Header}>
          <Route path='/' component={Home} />
          <Route path='/questiondetails' component={QuestionDetailsContainer} />
        </Route>
      </Router>
    </Provider>
    , document.getElementById('app'))
})
