import Question from '../components/Question'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  return {
    question: state.question
  }
}

export default connect(mapStateToProps)(Question)
