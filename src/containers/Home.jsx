import React from 'react'
import QuestionList from '../components/QuestionList'
import AddQuestion from '../components/AddQuestion'
import {connect} from 'react-redux'
import {setQuestion, setAnswerId} from '../actions'

const Home = (props) => {
  return (
    <div>
      <AddQuestion onClickQuestion={evt => console.log(evt)}/>
      <QuestionList questions={props.questions} onLinkClick={props.onLinkClick}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    questions: state.questions
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onLinkClick: (evt) => {
      dispatch(setQuestion(evt.target.id))
      dispatch(setAnswerId(evt.target.id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
