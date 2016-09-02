const initialState = {
  title: "",
  content: ""
}

export default function (state = initialState, action) {
  switch(action.type){
    case 'SET_TITLE':
      return Object.assign({}, state, {title: action.title})
    case 'SET_CONTENT':
      return Object.assign({}, state, {content: action.content})
    default:
      return state
  }
}
