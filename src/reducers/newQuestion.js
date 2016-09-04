const initialState = {
  title: "",
  content: ""
}

export default function (state = initialState, action) {
  switch(action.type){
    case 'SET_QUESTION_TITLE':
      return Object.assign({}, state, {title: action.title})
    case 'SET_QUESTION_CONTENT':
      return Object.assign({}, state, {content: action.content})
    case 'CLEAR_NEW_QUESTION':
      return initialState
    default:
      return state
  }
}
