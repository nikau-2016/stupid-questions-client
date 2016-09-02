import React from 'react'

export default React.createClass({
  props: {
    onClickQuestion: React.PropTypes.func.isRequired
  },
  render () {
    return (
      <div className="answer-form">
        <form>
          <label htmlFor="question">Add a question</label><br />
          <textarea type="text" name="question" /><br />
          <button type="button" onClick={this.props.onClickQuestion}>Add question</button>
        </form>
      </div>
    )
  }
})
