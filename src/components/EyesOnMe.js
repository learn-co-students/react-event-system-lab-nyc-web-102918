import React,{Component} from 'react'// Code EyesOnMe Component Here

// import ReactImage from '.public/favicon.ico'
const divStyle = {
  width: 100,
  height: 100,
  // font-size: 15px;
}

export default class EyesOnMe extends Component {
  onFocus = () => {
    console.log('Good!');
  }
  onBlur = () => {
    console.log('Hey! Eyes on me!');
  }

  render() {
    return (
    <div>
      <button
      onFocus={this.onFocus}
      onBlur={this.onBlur}
      type='button' style={divStyle}>👀</button>
    </div>
  )
  }
}
