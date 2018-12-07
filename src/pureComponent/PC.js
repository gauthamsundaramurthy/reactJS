import React, { Component, PureComponent } from 'react';

const Temp = (props) => {
  console.log('render Temp');
  return (<div>{props.val}</div>)
}


class PC extends PureComponent {
  constructor () {
    super()
    this.state = {
      val:1
    }
  }

  componentDidMount(){

    setInterval(()=> {
      this.setState(()=>{
        return { val : 1}
      });
    }, 2000)
  }

  /* Solution to stop re-rendering in case of not PureComponent */ 
  // shouldComponentUpdate(nextProp, nextState){
  //   return ( this.state.val === nextState.val ? false :true)
  // }

  render() {
    console.log('render PC');
    return (
      <div className="App">
          <Temp val={this.state.val}/>
      </div>
    );
  }
}

export default PC;
