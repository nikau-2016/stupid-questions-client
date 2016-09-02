import React from 'react'

export default React.createClass({
  props: {
    newQuestion: React.PropTypes.object.isRequired,
    onClickQuestion: React.PropTypes.func.isRequired,
    onChangeTitle: React.PropTypes.func.isRequired,
    onChangeContent: React.PropTypes.func.isRequired
  },
  render () {
    return (
      <div className="answer-form">
        <form>
          <label htmlFor="title">Title</label><br />
          <input name="title" value={this.props.newQuestion.title} onChange={this.props.onChangeTitle} /><br />
          <label htmlFor="content">Question details</label><br />
          <textarea type="text" name="content" value={this.props.newQuestion.content} onChange={this.props.onChangeContent} /><br />
          <button type="button" onClick={this.props.onClickQuestion}>Add question</button>
        </form>
      </div>
    )
  }
})
