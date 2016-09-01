import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import reducers from './reducers'
import QuestionListContainer from './containers/QuestionListContainer'

let store = createStore(reducers)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <QuestionListContainer />
    </Provider>
    , document.getElementById('app'))
})
