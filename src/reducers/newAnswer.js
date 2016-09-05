const initialState = {
  question_id: 0,
  content: ''
}

export default function (state = initialState, action) {
  switch(action.type){
    case 'SET_ANSWER_QUESTION_ID':
      return Object.assign({}, state, {question_id: action.id})
    case 'SET_ANSWER_CONTENT':
      return Object.assign({}, state, {content: action.content})
    case 'CLEAR_NEW_ANSWER':
      return initialState
    default:
      return state
  }
}
