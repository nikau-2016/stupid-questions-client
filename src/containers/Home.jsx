import React from 'react'
import QuestionList from '../components/QuestionList'
import AddQuestion from '../components/AddQuestion'
import {connect} from 'react-redux'
import {fetchAnswers, setAnswerId, setQuestion, changeTitle, changeContent, addNewQuestion, retrieveQuestions} from '../actions'

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
      dispatch(setQuestion(evt.target.id))
      dispatch(fetchAnswers(evt.target.id))
      dispatch(setAnswerId(evt.target.id))
    },
    onClickQuestion: (evt) => {
      dispatch(addNewQuestion())
    },
    onChangeTitle: (evt) => {
      dispatch(changeTitle(evt.target.value))
    },
    onChangeContent: (evt) => {
      dispatch(changeContent(evt.target.value))
    },
    getInitialQuestions: () => {
      dispatch(retrieveQuestions())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
