import QuestionDetails from '../components/QuestionDetails'
import AnswerDetails from '../components/AnswerDetails'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  const question = state.questions.find (elem => {
    return String(elem.id) === state.question
  })
  return {
    question
  }
}

export default connect(mapStateToProps)(QuestionDetails, AnswerDetails)
