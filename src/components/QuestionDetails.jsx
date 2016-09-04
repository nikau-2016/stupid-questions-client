import React from 'react'
import Question from './Question'
import Answer from './Answer'
import AnswerSubmit from './AnswerSubmit'

export default React.createClass({
  props: {
    questionDetails: React.PropTypes.object.isRequired,
    onChangeAnswer: React.PropTypes.func.isRequired,
    onClickSubmitAnswer: React.PropTypes.func.isRequired
  },
  render () {
    return (
      <div>
        <Question questionDetails={this.props.questionDetails} />
        <AnswerSubmit onClickSubmitAnswer={this.props.onClickSubmitAnswer} onChangeAnswer={this.props.onChangeAnswer} />
        <Answer answers={this.props.question.answers} />
      </div>
    )
  }
})
