import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  props: {
    questions: React.PropTypes.array.isRequired
  },
  render () {
    const questionList = this.props.questions.map((elem) => {
      return (
        <div key={elem.id}>
          <Link to='/questiondetails'>{elem.title}</Link>
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
