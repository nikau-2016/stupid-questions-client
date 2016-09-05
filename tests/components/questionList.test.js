import test from 'tape'
import React from 'react'
import { shallow, mount } from 'enzyme'
import {Link} from 'react-router'

import QuestionList from '../../src/components/QuestionList'

test('shallow', (t) => {
  const wrapper = shallow(<QuestionList questions={[{
    id: 3,
    title: "Test",
    content: "TEST",
    created: 'test'
  }]} />)

  t.equal(wrapper.contains(
    <div key={3}>
      <Link id={3} onClick={undefined} to='/questiondetails'>Test</Link>
      <p>test</p>
    </div>
  ), true)

  t.end()
})

// test('mount', (t) => {
//   const wrapper = mount(<QuestionList />)
//   const fooInner = wrapper.find('.foo-inner')
//   t.equal(fooInner.is('.foo-inner'), true)
// })
