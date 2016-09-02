import {combineReducers} from 'redux'

import questions from './questions'
import question from './question'
import newAnswer from './newAnswer'
import newQuestion from './newQuestion'

export default combineReducers({
  questions,
  question,
  newAnswer,
  newQuestion
})
