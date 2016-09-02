export default function (state = [], action) {
  switch(action.type){
    case 'SET_QUESTIONS':
      return action.questions
    default:
      return state
  }
}
