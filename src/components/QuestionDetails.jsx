import React from 'react'
import Question from './Question'
import AnswerList from './AnswerList'
import AnswerSubmit from './AnswerSubmit'

export default React.createClass({
  propTypes: {
    newAnswer: React.PropTypes.object.isRequired,
    question: React.PropTypes.object.isRequired,
    questionDetails: React.PropTypes.object.isRequired,
    onChangeAnswer: React.PropTypes.func.isRequired,
    onClickSubmitAnswer: React.PropTypes.func.isRequired
  },
  render () {
    return (
      <div>
        <Question questionDetails={this.props.questionDetails} />
        <AnswerSubmit newAnswer={this.props.newAnswer} onClickSubmitAnswer={this.props.onClickSubmitAnswer} onChangeAnswer={this.props.onChangeAnswer} />
        <AnswerList answers={this.props.question.answers} />
      </div>
    )
  }
})
