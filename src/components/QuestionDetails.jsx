import React from 'react'
import Question from './Question'
import AnswerSubmit from './AnswerSubmit'

export default React.createClass({
  props: {
    question: React.PropTypes.object.isRequired,
    onChangeAnswer: React.PropTypes.func.isRequired,
    onClickSubmitAnswer: React.PropTypes.func.isRequired
  },
  render () {
    return (
    <div>
      <Question question={this.props.question} />
      <AnswerSubmit onClickSubmitAnswer={this.props.onClickSubmitAnswer} onChangeAnswer={this.props.onChangeAnswer} />
    </div>
    )
  }
})
