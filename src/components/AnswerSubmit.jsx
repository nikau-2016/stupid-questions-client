import React from 'react'

export default React.createClass({
  props: {
    newAnswer: React.PropTypes.object.isRequired,
    onClickSubmitAnswer: React.PropTypes.func.isRequired,
    onChangeAnswer: React.PropTypes.func.isRequired
  },
  render () {
    return (
      <div className="answer-submit">
        <form>
          <label htmlFor="answer">Answer a question</label><br />
          <textarea type="text" name="question" value={this.props.newAnswer.content} onChange={this.props.onChangeAnswer} /><br />
          <button type="button" onClick={this.props.onClickSubmitAnswer}>Answer a question</button>
        </form>
      </div>
    )
  }
})
