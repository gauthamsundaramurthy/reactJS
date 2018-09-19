import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import {shallow, configure} from 'enzyme'
import {PreviewImage} from './PreviewImage'

configure({ adapter: new Adapter() })

describe('rendering', () => {
  let wrapper, footerComponent, buttonComponent
  beforeEach(() => {
    wrapper = shallow(<PreviewImage />)
    footerComponent = wrapper.find('Footer')
    buttonComponent = wrapper.find('button')
  })
  /* title */
  it('should contain one Header tag ', () => {
    expect(wrapper.find('h1')).toHaveLength(1)
  })
  it('title default Prop ', () => {
    expect(wrapper.instance().props.title).toEqual('Image Previewer')
  })
  it('Heading should be Image Preview ', () => {
    expect(wrapper.find('h1').text()).toEqual('Image Previewer')
  })
  /* check imageStyling props */
  it('imageStyling default Prop', () => {
    expect(wrapper.instance().props.imageStyling).toEqual('default')
  })
  /* check for atleast one image to render in a page */
  it ('check at least one image to display', () => {
    expect(wrapper.instance().props.imageUrls.length).toBeGreaterThan(0)
  })
  /* check for atleast one image to render in a page */
  it ('check a particular element in an array', () => {
    expect([1, 2, 3, 4, 5]).toContain(3)
  })

  /* Footer */
  it('check footer props', () => {
    expect(footerComponent.props().footerMessage).toEqual('Thanks for visiting')
  })

  /* button onclick toggle */
  it('buttons changes the state', () => {
    buttonComponent.simulate('click')
    expect(wrapper.state().toggleView).toEqual('hide')
    buttonComponent.simulate('click')
    expect(wrapper.state().toggleView).toEqual('show')
  })
})
