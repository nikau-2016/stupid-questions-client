import React from 'react'
import Question from './Question'
import AnswerSubmit from './AnswerSubmit'

export default React.createClass({
  props: {
    question: React.PropTypes.object.isRequired
  },
  render () {
    return (
      <Question question={this.props.question} />
      <AnswerSubmit onClickSubmitAnswer={evt => console.log(`This is the answer submission ${evt}`)} />
    )
  }
})
