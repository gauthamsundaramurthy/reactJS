import React from 'react'

class ChildToParent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: 'Initial data...',
      siblingData: ''
    }
    this.updateState = this.updateState.bind(this)
    this.getValueFromChild = this.getValueFromChild.bind(this)
  };
  updateState (e) {
    this.setState({data: e.target.value})
  }
  getValueFromChild (data) {
    this.setState({
      siblingData: data
    })
  }
  render () {
    return (
      <div>
        <Sibling1 myDataProp={this.state.siblingData} updateStateProp={this.updateState} callBack={this.getValueFromChild} />
        <Sibling2 data={this.state.siblingData} />
      </div>
    )
  }
}

class Sibling1 extends React.Component {
  constructor () {
    super()
    this.sendDataFromChildToParent = this.sendDataFromChildToParent.bind(this)
  }
  sendDataFromChildToParent () {
    this.props.callBack(8)
  }
  render () {
    return (
      <div>
        <button onClick={this.sendDataFromChildToParent}>Update</button>
        <h3> Passing data from Child To Parent </h3>
        <div>{this.props.myDataProp}</div>
      </div>
    )
  }
}

function Sibling2 (props) {
  return (
    <div>
      <h3> Sibling 2 </h3>
      <div> {props.data} </div>
    </div>
  )
}

export default ChildToParent
