// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component {

  handleInput = () => {
    console.log('Entering password...')
  }

//en react todos los eventos comienzan con on
// utilizo este evento porque me lo dice el enunciado :)
// y el render siempre tiene un return
  render() {
    return <input type="password" onKeyUp={this.handleInput}/>
  }

}

export default Keypad
