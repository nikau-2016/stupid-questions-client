module.exports = {
  setQuestion,
  submitAnswer
}

const request = require('superagent')

function setQuestion (id) {
  return {
    type: 'SET_QUESTION',
    id
  }
}


function submitAnswer (answer) {
  return (dispatch) => {
    const target = ``
  }
}
