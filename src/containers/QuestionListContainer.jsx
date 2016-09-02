import QuestionList from '../components/QuestionList'
import {connect} from 'react-redux'
import {setQuestion, retrieveQuestions} from '../actions'

const mapStateToProps = (state) => {
  return {
    questions: state.questions
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    getInitialQuestions: () => {
      dispatch(retrieveQuestions())
    },
    onLinkClick: (evt) => {
      dispatch(setQuestion(evt.target.id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList)
