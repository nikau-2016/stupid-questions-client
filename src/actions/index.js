const request = require('superagent')

export  const setQuestion = (id) => {
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
