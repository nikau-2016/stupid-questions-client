import request from 'superagent'

export const setQuestion = (id) => {
  return {
    type: 'SET_QUESTION',
    id
  }
}

export const sendAnswer = () => {
  return (dispatch, getState) => {
    var answer = Object.assign({}, getState().newAnswer, {created: 'FAKE DATE'})
    request
      .post('http://localhost:3000/v1/questions/' + answer.question_id + '/answers')
      .send(answer)
      .end((err, res) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('Answer has been sent to server')
        // dispatch to set the list of answers
    })
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

export  const setAnswerContent = (content) => {
  return {
    type: 'SET_ANSWER_CONTENT',
    content: content
  }
}

export  const setAnswerId = (id) => {
  return {
    type: 'SET_ANSWER_QUESTION_ID',
    id: id
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
