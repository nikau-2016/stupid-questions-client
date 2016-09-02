import React from 'react'
import QuestionList from '../components/QuestionList'
import AddQuestion from '../components/AddQuestion'
import {connect} from 'react-redux'
import {setQuestion, changeTitle, changeContent, addNewQuestion} from '../actions'

const Home = (props) => {
  return (
    <div>
      <AddQuestion newQuestion={props.newQuestion} onClickQuestion={props.onClickQuestion} onChangeTitle={props.onChangeTitle} onChangeContent={props.onChangeContent} />
      <QuestionList questions={props.questions} onLinkClick={props.onLinkClick}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    questions: state.questions,
    newQuestion: state.newQuestion
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onLinkClick: (evt) => {
      dispatch(setQuestion(evt.target.id))
    },
    onClickQuestion: (evt) => {
      dispatch(addNewQuestion())
    },
    onChangeTitle: (evt) => {
      dispatch(changeTitle(evt.target.value))
    },
    onChangeContent: (evt) => {
      dispatch(changeContent(evt.target.value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
