import request from 'superagent'
const env = process.env.NODE_ENV || 'development'
const url = env === 'production' ? 'http://s2pid-kweschinz.herokuapp.com/'
                                    :'http://localhost:3000/'

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
export const retrievalError = (error) => {
  return {
    type: 'RETRIEVAL_ERROR',
    error: error
  }
}

export const retrieveQuestions = () => {
  return (dispatch) => {
    request
      .get(`${url}v1/questions`)
      .end((err, res) => {
        if (err) {
          dispatch(retrievalError(err.message))
          return
        }
        dispatch(setQuestions(res.body.data))
      })
  }
}

export function addNewQuestion () {
  return (dispatch, getState) => {
    const newQuestion = Object.assign({}, getState().newQuestion, {created: 'FAKE DATE'})
    request
      .post(`${url}v1/questions`)
      .send(newQuestion)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) {
          dispatch(retrievalError(err.message))
          return
        }
        dispatch(retrieveQuestions())
        dispatch(clearNewQuestion())
      })
  }
}
