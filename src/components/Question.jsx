import React from 'react'

export default React.createClass({
  props: {
    id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    content: React.PropTypes.string.isRequired,
    created: React.PropTypes.string.isRequired
  },
  render () {
    return (
      <div className="question">
        <h3 className="question-title">Title: {this.props.title}</h3>
        <p className="question-created">{this.props.created}</p>
        <p className="question-content">Content: {this.props.content}</p>
      </div>
    )

  }
})
