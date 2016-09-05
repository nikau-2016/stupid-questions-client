import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render () {
    return (
      <div>
        <header>
          <Link to='/'>LINK HERE</Link>
        </header>
        <section>
          {this.props.children}
        </section>
      </div>
    )
  }
})
