import React, { Component } from 'react';

class Keypad extends React.Component {

  keyUpHandler = (event) => {
    console.log('Entering password...');
  }

  render() {
    return(
      <input
        type="password"
        onKeyUp={this.keyUpHandler} />
    )
  }

}

export default Keypad
