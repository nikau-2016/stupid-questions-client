import QuestionList from '../components/QuestionList'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  return {
    questions: state.questions
  }
}

export default connect(mapStateToProps)(QuestionList)
