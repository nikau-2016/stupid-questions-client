module.exports = {
  setQuestion
}

function setQuestion (id) {
  return {
    type: 'SET_QUESTION',
    id
  }
}
