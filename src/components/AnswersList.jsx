import React from 'react'

export default React.createClass({
  props: {
    answer: React.PropTypes.object.isRequired
  },
  render () {
    return (
      <div>
        <p className="answer-created">{this.props.answer.created}</p>
        <p className="answer-content">Content: {this.props.answer.content}</p>
      </div>
    )
  }
})
