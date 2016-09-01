import React from 'react'
import Question from './Question'

export default React.createClass({
  props: {
    question: React.PropTypes.object.isRequired
  },
  render () {
    return (
      <Question question={this.props.question} />
    )
  }
})
