import React from 'react'

class Keypad extends React.Component {

  handleKeyUp = () => {
    console.log('Entering password...')
  }
  render(){
    return (
      <div>
      <input type="password" onKeyUp={this.handleKeyUp}></input>
      </div>
    )
  }
}

export default Keypad;
