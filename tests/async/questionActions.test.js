import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import test from 'tape'
import sinon from 'sinon'

import {fetchQuestions} from '../../src/actions'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

// remember to remove 'only' after testing
test.only('dispatch setQuestions after fetching questions from server', (t) => {
  nock('http://localhost:3000')
    .get('/v1/questions')
    .reply(200, {body: [{
      id: 3,
      title: "Test",
      content: "TEST",
      created: 'test'
      }]
    })

  const expectedActions = [{
    type: 'SET_QUESTIONS',
    questions: [{
      id: 3,
      title: "Test",
      content: "TEST",
      created: 'test'
      }]
  }]
  const store = mockStore({questions: []})

  store.dispatch(fetchQuestions())
  t.deepEqual(store.getActions(), expectedActions)
  t.end()
})
