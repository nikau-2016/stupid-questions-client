import QuestionDetails from '../components/QuestionDetails'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  let question = state.questions.find(elem => {
    return String(elem.id) === state.question.id
  })
  question.answers = state.question.answers
  return {
    question
  }
}

export default connect(mapStateToProps)(QuestionDetails)
