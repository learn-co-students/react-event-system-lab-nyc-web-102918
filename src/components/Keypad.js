// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component {

  handleInput = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <div>
        <form>
          <input type="password" onKeyUp={this.handleInput}/>
        </form>
      </div>
    )
  }

}

export default Keypad;
