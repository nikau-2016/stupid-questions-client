import QuestionList from '../components/QuestionList'
import AnswerDetails from '../components/AnswerDetails'
import {connect} from 'react-redux'
import {setQuestion} from '../actions'
import {receiveAnswers} from '../actions'

const mapStateToProps = (state) => {
  return {
    questions: state.questions,
    answers: state.answers
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onLinkClick: (evt) => {
      dispatch(setQuestion(evt.target.id))
      dispatch(receiveAnswers(evt.target.id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList)
