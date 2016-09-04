import QuestionDetails from '../components/QuestionDetails'
import {connect} from 'react-redux'
import {setAnswerContent, addNewAnswer} from '../actions'

const mapStateToProps = (state) => {
  let question = state.questions.find(elem => {
    return String(elem.id) === state.question.id
  })
  question.answers = state.question.answers
  return {
    question
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeAnswer: (evt) => {
      dispatch(setAnswerContent(evt.target.value))
    },
    onClickSubmitAnswer: () => {
      dispatch(addNewAnswer())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetails)
