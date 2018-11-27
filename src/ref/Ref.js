import React from 'react'

class Ref extends React.Component {
  constructor (props) {
    super(props)
    this.myInput = React.createRef()
    this.formSubmit = this.formSubmit.bind(this)
  }

  formSubmit () {
    alert(this.myInput.current.value)
  }

  render () {
    return (
      <div>
        <form onSubmit={this.formSubmit} >
          <input type='text' ref={this.myInput} />
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}
export default Ref
