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

// export const retrieveQuestions = () => {
//   return (dispatch) => {
//     request
//       .get(`http://s2pid-kweschinz.herokuapp.com/v1/questions`)
//       .end((err, res) => {
//         if (err) {
//           console.error(err.message)
//           return
//         }
//         dispatch(setQuestions(res))
//       })
//   }
// }

export function addNewQuestion () {
  const newQuestion = Object.assign({}, getState().newQuestion, {created: 'FAKE DATE'})
  return (dispatch, getState) => {
    request
      .post(`http://s2pid-kweschinz.herokuapp.com/v1/questions`)
      .send(newQuestion)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(retrieveQuestions())
      })
  }
}
