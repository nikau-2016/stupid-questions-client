export default function (state = {}, action) {
  switch(action.type){
    case 'SET_QUESTION':
      return Object.assign({}, state, { id: action.id })

    case 'RECEIVE_ANSWERS':
      return Object.assign({}, state, { id: action.id })


    default:
      return state
  }
}
