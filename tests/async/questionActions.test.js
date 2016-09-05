import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import test from 'tape'
import sinon from 'sinon'

import {fetchQuestions, addNewQuestion} from '../../src/actions'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

test('dispatch setQuestions after fetching questions from server', (t) => {
  nock('http://localhost:3000')
    .get('/v1/questions')
    .reply(200, {data: [{
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
  const unsubscribe = store.subscribe(() => {
    t.deepEqual(store.getActions(), expectedActions)
    t.end()
    unsubscribe()
  })
  store.dispatch(fetchQuestions())
})

test('dispatch fetchQuestions and clearQuestionForm after adding new question', (t) => {
  nock('http://localhost:3000')
    .post('/v1/questions')
    .reply(200)

  const expectedActions = [
    { type: 'CLEAR_NEW_QUESTION' }
  ]
  const store = mockStore({questions: []})
  const unsubscribe = store.subscribe(() => {
    t.deepEqual(store.getActions(), expectedActions)
    t.end()
    unsubscribe()
  })
  store.dispatch(addNewQuestion())
})
