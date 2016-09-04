import React from 'react'

export default React.createClass({
  props: {
    questionDetails: React.PropTypes.object.isRequired
  },
  render () {
    return (
      <div className="question">
        <h3 className="question-title">Title: {this.props.questionDetails.title}</h3>
        <p className="question-created">{this.props.questionDetails.created}</p>
        <p className="question-content">Content: {this.props.questionDetails.content}</p>
      </div>
    )

  }
})
