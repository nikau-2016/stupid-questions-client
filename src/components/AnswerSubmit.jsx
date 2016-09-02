import React from 'react'

export default React.createClass({
  props: {
    onClickSubmitAnswer: React.PropTypes.func.isRequired,
    onChangeAnswer: React.PropTypes.func.isRequired
  },
  render () {
    return (
      <div className="answer-submit">
        <form>
          <label htmlFor="answer">Answer a question</label><br />
          <textarea type="text" name="question" onChange={this.props.onChangeAnswer} /><br />
          <button type="button" onClick={this.props.onClickSubmitAnswer}>Answer a question</button>
        </form>
      </div>
    )
  }
})
