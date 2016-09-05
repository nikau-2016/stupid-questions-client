import React from 'react'
import Question from './Question'
import Answer from './Answer'

export default React.createClass({
  propTypes: {
    question: React.PropTypes.object.isRequired
  },
  render () {
    return (
      <div>
        <Question question={this.props.question} />
        <Answer answers={this.props.question.answers} />
      </div>
    )
  }
})
