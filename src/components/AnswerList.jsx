import React from 'react'

export default React.createClass({
    propTypes: {
        answers: React.PropTypes.array.isRequired
    },
    render () {
        return (
            <div className="answer">
                {
                    this.props.answers.map(answer => (
                        <div key={answer.id}>
                            <p className="answer-created">{answer.created}</p>
                            <p className="answer-content">{answer.content}</p>
                        </div>
                    ))
                }
            </div>
        )
    }
})
