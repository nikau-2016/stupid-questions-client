export default function (state = 0, action) {
  switch(action.type){
    case 'SET_QUESTION':
      return action.id
    default:
      return state
  }
}
