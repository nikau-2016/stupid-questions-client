import test from 'tape'
import questions from '../../src/reducers/questions'

test('SET_QUESTIONS sets questions when initial state is an empty array', (t) => {
  const initialState = []
  const action = {
    type: 'SET_QUESTIONS',
    questions: [{
      id: 3,
      title: "Test",
      content: "TEST",
      created: 'test'
    }]
  }
  const expectedState = [{
    id: 3,
    title: "Test",
    content: "TEST",
    created: 'test'
  }]

  t.deepEqual(questions(initialState, action), expectedState)
  t.end()
})

test('SET_QUESTIONS sets questions when initial state is not empty', (t) => {
  const initialState = [{
    id: 1,
    title: "Test - initial state",
    content: "TEST - initial state"
  }]
  const action = {
    type: 'SET_QUESTIONS',
    questions: [{
      id: 3,
      title: "Test",
      content: "TEST",
      created: 'test'
    }]
  }
  const expectedState = [{
    id: 3,
    title: "Test",
    content: "TEST",
    created: 'test'
  }]

  t.deepEqual(questions(initialState, action), expectedState)
  t.end()
})
