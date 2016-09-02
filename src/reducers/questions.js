import initialQuestions from './initialQuestions'

export default function (state = initialQuestions, action) {
  switch(action.type){
    case 'SET_QUESTIONS':
      return action.questions
    default:
      return state
  }
}
