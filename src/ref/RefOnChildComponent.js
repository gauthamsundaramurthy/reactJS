import React from 'react'

/* parent component */ 

class RefOnChildComponent extends React.Component {
  constructor (props) {
    super(props)
    this.myInput = React.createRef()
    this.formSubmit = this.formSubmit.bind(this)
  }

  formSubmit () {
    alert(`${this.myInput.current.value} from parent`)
  }

  render () {
    return (
      <div>
        <form onSubmit={this.formSubmit} >
          <span> Parent :</span>
          <input type='text' ref={this.myInput} />
          <input type='submit' value='Submit' />
        </form>
        <br/> <br/>
        <FuncCustomComp />
      </div>
    )
  }
}


/* child component */

const FuncCustomComp = () => {
  let inputRef = null
  let innerMostRef = null
  
  const onClick = () => {
    inputRef.focus()
    alert(`${inputRef.value} from child component and ${innerMostRef.value} from Inner Child component`  )
  }
  
  return (
    <div>
      <div>
        <span>Child : </span>
        <input 
          type='text' 
          ref={(input) => {inputRef = input}} />
        
        <InnerChild innerMostRef = { (input) => {innerMostRef = input}} />  

        <input 
          type="submit" 
          value="submit"
          onClick={onClick}/>  
  
      </div>
    </div> 
  )
}

/* Inner child component */

const InnerChild = (props) => {
  return (
    <React.Fragment>
      <span> Inner Child :</span>
      <input 
        type='text'
        ref={props.innerMostRef}
      /> 
     </React.Fragment>
  )
}


export default RefOnChildComponent
