import test from 'tape'
import React from 'react'
import sinon from 'sinon'
import {shallow, mount} from 'enzyme'
import {Link} from 'react-router'
import jsdom from 'jsdom'

import QuestionList from '../../src/components/QuestionList'

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.document = doc
global.window = doc.defaultView

function dummyFunction () {}

test('questionList has question', (t) => {
  const wrapper = shallow(
    <QuestionList
      questions={[{
          id: 3,
          title: "Test",
          content: "TEST",
          created_at: 'test'
        }]}
      error={''}
      onLinkClick={dummyFunction}
      getInitialQuestions={dummyFunction}
      />)

  t.equal(wrapper.contains(
    <div key={3}>
      <Link id={3} onClick={dummyFunction} to='/questiondetails'>Test</Link>
      <p>test</p>
    </div>
  ), true)

  t.end()
})

test('questionList has error', (t) => {
  const wrapper = shallow(
    <QuestionList
      error="this is an error"
      questions={[{
        id: 3,
        title: "Test",
        content: "TEST",
        created: 'test'
      }]}
      onLinkClick={dummyFunction}
      getInitialQuestions={dummyFunction}
      />)

  t.equal(wrapper.containsMatchingElement(
    <p>this is an error</p>
  ), true)

  t.end()
})


test('questionList has class question-list', (t) => {
  const wrapper = shallow(
    <QuestionList
      questions={[{
        id: 3,
        title: "Test",
        content: "TEST",
        created: 'test'
      }]}
      error={''}
      onLinkClick={dummyFunction}
      getInitialQuestions={dummyFunction}
      />)

  t.equal(wrapper.is('.question-list'), true)

  t.end()
})

test('check onLinkClick is called', (t) => {
    const onButtonClick = sinon.spy()

    const wrapper = shallow(
      <QuestionList
        error="this is an error"
        questions={[{
          id: 3,
          title: "Test",
          content: "TEST",
          created: 'test'
        }]}
        onLinkClick={onButtonClick}
        getInitialQuestions={dummyFunction}
        />)

    wrapper.find('Link').simulate('click')
    t.equal(onButtonClick.calledOnce, true)

    t.end()
  })

test('getInitialQuestions has been called', (t) => {
  const spy = sinon.spy(QuestionList.prototype, 'componentDidMount')

  const wrapper = mount(<QuestionList
    error="this is an error"
    questions={[{
      id: 3,
      title: "Test",
      content: "TEST",
      created: 'test',
    }]}
    getInitialQuestions={dummyFunction}
    onLinkClick={dummyFunction}
  />)

  t.equal(spy.calledOnce, true)

  t.end()
})
