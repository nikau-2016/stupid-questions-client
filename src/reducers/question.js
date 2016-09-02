export default function (state = { answers: [] }, action) {
  switch(action.type){
    case 'SET_QUESTION':
      return Object.assign({}, state, { id: action.id })

    case 'RECEIVE_ANSWERS':
      return Object.assign({}, state, { answers: action.answers })

    default:
      return state
  }
}
