import React from 'react'
import QuestionList from '../components/QuestionList'
import AddQuestion from '../components/AddQuestion'
import {connect} from 'react-redux'
import {fetchAnswers, setAnswerId, setQuestionId, setQuestionTitle, setQuestionContent, addNewQuestion, fetchQuestions} from '../actions'

const Home = (props) => {
  return (
    <div>
      <AddQuestion
        newQuestion={props.newQuestion}
        onClickQuestion={props.onClickQuestion}
        onChangeTitle={props.onChangeTitle}
        onChangeContent={props.onChangeContent}
        error={props.error}/>
      <QuestionList
        questions={props.questions}
        onLinkClick={props.onLinkClick}
        getInitialQuestions={props.getInitialQuestions}
        error={props.error}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    questions: state.questions,
    newQuestion: state.newQuestion,
    error: state.error
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onLinkClick: (evt) => {
      dispatch(setQuestionId(evt.target.id))
      dispatch(fetchAnswers(evt.target.id))
      dispatch(setAnswerId(evt.target.id))
    },
    onClickQuestion: (evt) => {
      dispatch(addNewQuestion())
    },
    onChangeTitle: (evt) => {
      dispatch(setQuestionTitle(evt.target.value))
    },
    onChangeContent: (evt) => {
      dispatch(setQuestionContent(evt.target.value))
    },
    getInitialQuestions: () => {
      dispatch(fetchQuestions())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
