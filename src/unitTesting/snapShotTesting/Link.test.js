import React from 'react'
import Link from './Link'
import renderer from 'react-test-renderer'

/* comment below code and run it. Fist , the snapshot gets created */
it('renders correctly', () => {
  const tree = renderer
    .create(<Link page='http://www.facebook.com'>Facebook</Link>)
    .toJSON()
  console.log(tree)
  expect(tree).toMatchSnapshot()
})

/* once snapshot gets created, run this */

/*
it('renders correctly', () => {
  const tree = renderer
    .create(<Link page='http://www.google.com'>Google</Link>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
*/
