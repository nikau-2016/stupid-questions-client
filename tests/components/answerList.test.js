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
//   const wrapper = shallow(<AnswerList answers={[{
//     id: 1,
//     content: "TEST",
//     created_at: "2016-09-05T21:35:57.024Z"
//   }]} />)
//
//   t.equal(wrapper.contains(
//     <div key={1}>
//       <p>TEST</p>
//       <p>2016-09-05T21:35:57.024Z</p>
//     </div>
//   ), true)
//
//   t.end()
// })
