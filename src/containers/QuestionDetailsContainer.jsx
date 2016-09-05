import QuestionDetails from '../components/QuestionDetails'
import {connect} from 'react-redux'
import {setAnswerContent, sendAnswer} from '../actions'

const mapStateToProps = (state) => {
  let questionDetails = state.questions.find(elem => {
    return String(elem.id) === state.question.id
  })

  return {
    question: state.question,
    questionDetails: questionDetails
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
