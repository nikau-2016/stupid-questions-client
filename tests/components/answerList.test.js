// import test from 'tape'
// import React from 'react'
// import sinon from 'sinon'
// import {shallow, mount} from 'enzyme'
// import {Link} from 'react-router'
// import jsdom from 'jsdom'
//
// import AnswerList from '../../src/components/AnswerList'
//
// const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
// global.document = doc
// global.window = doc.defaultView
//
// test('AnswerList has answers', (t) => {
//   const wrapper = shallow(
//     <AnswerList
//      answers={[{
//       id: 3,
//       created_at: "test",
//       content: "TEST"
//     }]}
//     error={''}
//
//   />)
//   console.log(wrapper)
//   t.equal(wrapper.contains(
//       <div key={3}>
//         <p>TEST</p>
//         <p>test</p>
//       </div>
//   ), true)
//
//   t.end()
// })
