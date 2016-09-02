import {combineReducers} from 'redux'

import questions from './questions'
import question from './question'
import newAnswer from './newAnswer'


export default combineReducers({
  questions,
  question,
  newAnswer
})
