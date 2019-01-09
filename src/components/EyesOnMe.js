// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component {

//When the focus event fires, use console.log to print out the text 'Good!'.
handleFocus = () => {
  console.log('Good!')
}

//When the blur event fires, use console.log to print out the text 'Hey! Eyes on me!'.
handleBlur = () => {
 console.log('Hey! Eyes on me!')

}

  render() {
    //On that button, add event handlers that listens for the focus and blur events.
    // aqui siempre uso el nombre del evento luego igual a this punto el method que maneja este evento
    return <button onFocus={this.handleFocus} onBlur={this.handleBlur}>Click! </button>

  }

}



export default EyesOnMe
