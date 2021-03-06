import React from 'react'

class ComponentLifeCycle extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: 0
    }
    this.setNewNumber = this.setNewNumber.bind(this)
  }
  setNewNumber () {
    this.setState({data: this.state.data + 1})
  }
  render () {
    return (
      <div>
        <button onClick={this.setNewNumber}>INCREMENT</button>
        <Content myNumber={this.state.data} />
      </div>
    )
  }
}

class Content extends React.Component {
  componentWillMount () {
    console.log('Component WILL MOUNT!')
  }
  componentDidMount () {
    console.log('Component DID MOUNT!')
  }
  componentWillReceiveProps (newProps) {
    console.log('Component WILL RECIEVE PROPS!')
    console.log(newProps)
  }
  shouldComponentUpdate (newProps, newState) {
    console.log('SHOULD COMPONENT UPDATE')
    console.log(newProps)
    console.log(newState)
    return true
  }
  componentWillUpdate (nextProps, nextState) {
    console.log('Component WILL UPDATE!')
    console.log(nextProps)
    console.log(nextState)
  }
  componentDidUpdate (prevProps, prevState) {
    console.log('Component DID UPDATE!')
    console.log(prevProps)
    console.log(prevState)
  }
  componentWillUnmount () {
    console.log('Component WILL UNMOUNT!')
  }
  render () {
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    )
  }
}

export default ComponentLifeCycle
