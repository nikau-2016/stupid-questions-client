import request from 'superagent'

export const setQuestion = (id) => {
  return {
    type: 'SET_QUESTION',
    id
  }
}

export const setQuestions = (questions) => {
  return {
    type: 'SET_QUESTIONS',
    questions: questions
  }
}

export const changeTitle = (title) => {
  return {
    type: 'SET_TITLE',
    title
  }
}

export const changeContent = (content) => {
  return {
    type: 'SET_CONTENT',
    content
  }
}
export const clearNewQuestion = (content) => {
  return {
    type: 'CLEAR_NEW_QUESTION'
  }
}
export const receiveAnswers = (answers) => {
  return {
    type: 'RECEIVE_ANSWERS',
    answers
  }
}

export const retrieveQuestions = () => {
  return (dispatch) => {
    request
      .get(`http://localhost:3000/v1/questions`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(setQuestions(res.body.data))
      })
  }
}

export function fetchAnswers (id) {
  return (dispatch) => {

    request
    .get(`http://localhost:3000/v1/questions/${id}/answers`)
    .end((err, res) => {
      if (err) {
        console.error(err.message)
        return
      }
      console.log(res.body.data)
      dispatch(receiveAnswers(res.body.data))
    })
  }
}

export function addNewQuestion () {
  return (dispatch, getState) => {
    const newQuestion = Object.assign({}, getState().newQuestion, {created: 'FAKE DATE'})
    request
      .post(`http://localhost:3000/v1/questions`)
      .send(newQuestion)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(retrieveQuestions())
        dispatch(clearNewQuestion())
      })
    }
  }
