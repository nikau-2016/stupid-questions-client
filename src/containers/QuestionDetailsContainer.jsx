import QuestionDetails from '../components/QuestionDetails'
import {connect} from 'react-redux'
import {setAnswerContent, sendAnswer} from '../actions'

const mapStateToProps = (state) => {
  const question = state.questions.find(elem => {
    return String(elem.id) === state.question
  })
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
      dispatch(sendAnswer())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetails)
