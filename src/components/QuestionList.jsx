import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  propTypes: {
    questions: React.PropTypes.array.isRequired,
    onLinkClick: React.PropTypes.func.isRequired,
    getInitialQuestions: React.PropTypes.func.isRequired,
    error: React.PropTypes.string.isRequired
  },
  componentDidMount () {
    this.props.getInitialQuestions()
  },
  render () {
    const questionList = this.props.questions.map((elem) => {
      return (
        <div key={Number(elem.id)}>
          <Link id={elem.id} onClick={this.props.onLinkClick} to='/questiondetails'>{elem.title}</Link>
          <p>{elem.created_at}</p>
        </div>
      )
    })
    return (
      <div className="question-list">
        {questionList}
        <p> {this.props.error} </p>
      </div>
    )
  }
})
