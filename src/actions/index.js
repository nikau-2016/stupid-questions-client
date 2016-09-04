import request from 'superagent'
const env = process.env.NODE_ENV || 'development'
const url = env === 'production' ? 'https://s2pid-kweschinz.herokuapp.com/'
                                    :'http://localhost:3000/'

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

export const retrievalError = (error) => {
  return {
    type: 'RETRIEVAL_ERROR',
    error: error
  }
}

export const setAnswerContent = (content) => {
  return {
    type: 'SET_ANSWER_CONTENT',
    content: content
  }
}

export const setAnswerId = (id) => {
  return {
    type: 'SET_ANSWER_QUESTION_ID',
    id: id
  }
}

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

export const addNewQuestion = () => {
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

export const fetchAnswers = id => {
  return (dispatch) => {
    request
    .get(`${url}v1/questions/${id}/answers`)
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

export const sendAnswer = () => {
  return (dispatch, getState) => {
    var answer = Object.assign({}, getState().newAnswer, {created: 'FAKE DATE'})
    request
      .post(`${url}v1/questions/${answer.question_id}/answers`)
      .send(answer)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) {
          console.log(err)
          return
        }
      })
  }
}
