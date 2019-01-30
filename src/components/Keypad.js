import React,{Component} from 'react'// Code Keypad Component Here

export default class Keypad extends Component {

  state = {
    password: ''
  }
  handleInput = (event) => {
    console.log(`Entering password... ${event.target.value}`);
  }
render() {
  return (
    <div>
      <input onKeyUp={this.handleInput}type="password" />
    </div>
  )
}

}
