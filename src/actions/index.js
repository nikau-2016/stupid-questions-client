import request from 'superagent'
const env = process.env.NODE_ENV || 'development'
const url = env === 'production' ? 'https://s2pid-kweschinz.herokuapp.com/'
                                    :'http://localhost:3000/'

export const retrievalError = (error) => {
  return {
    type: 'RETRIEVAL_ERROR',
    error: error
  }
}

export const setQuestionId = (id) => {
  return {
    type: 'SET_QUESTION_ID',
    id
  }
}

export const setQuestionTitle = (title) => {
  return {
    type: 'SET_QUESTION_TITLE',
    title
  }
}

export const setQuestionContent = (content) => {
  return {
    type: 'SET_QUESTION_CONTENT',
    content
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

export const addNewQuestion = () => {
  return (dispatch, getState) => {
    const newQuestion = getState().newQuestion
    request
      .post(`${url}v1/questions`)
      .send(newQuestion)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) {
          dispatch(retrievalError(err.message))
          return
        }
        dispatch(fetchQuestions())
        dispatch(clearQuestionForm())
      })
  }
}

export const clearQuestionForm = () => {
  return {
    type: 'CLEAR_NEW_QUESTION'
  }
}

export const fetchQuestions = () => {
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

export const setQuestions = (questions) => {
  return {
    type: 'SET_QUESTIONS',
    questions: questions
  }
}

export const addNewAnswer = () => {
  return (dispatch, getState) => {
    var answer = getState().newAnswer
    request
      .post(`${url}v1/questions/${answer.question_id}/answers`)
      .send(answer)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) {
          dispatch(retrievalError(err.message))
          return
        }
        dispatch(clearAnswerForm())
      })
  }
}

export const clearAnswerForm = () => {
  return {
    type: 'CLEAR_NEW_ANSWER'
  }
}

export const fetchAnswers = (id) => {
  return (dispatch) => {
    request
    .get(`${url}v1/questions/${id}/answers`)
    .end((err, res) => {
      if (err) {
        dispatch(retrievalError(err.message))
        return
      }
      dispatch(setAnswers(res.body.data))
    })
  }
}


export const setAnswers = (answers) => {
  return {
    type: 'SET_ANSWERS',
    answers
  }
}
