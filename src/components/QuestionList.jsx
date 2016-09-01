import React from 'react'

export default React.createClass({
  props: {
    questions: React.PropTypes.array.isRequired
  },
  render () {
    const questionList = this.props.questions.map((elem) => {
      return (
        <div key={elem.id}>
          <h3>{elem.title}</h3>
          <p>{elem.created}</p>
        </div>
      )
    })
    return (
      <div className="question-list">
        {questionList}
      </div>
    )
  }
})
