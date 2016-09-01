import React from 'react'

export default React.createClass({
  props: {
    question: React.PropTypes.object.isRequired
  },
  render () {
    return (
      <div className="question">
        <h3 className="question-title">Title: {this.props.question.title}</h3>
        <p className="question-created">{this.props.question.created}</p>
        <p className="question-content">Content: {this.props.question.content}</p>
      </div>
    )

  }
})
