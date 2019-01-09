// Code Keypad Component Here
import React from 'react';
// import ReactDOM from 'react-dom';

class Keypad extends React.Component {
    state = {
      password: ""
    };
  
    handleChange = event => {
      console.log("gahchjsdv");
      console.log(this.state.password);
      console.log(event.target);
      this.setState({ password: event.target.value });
    };
  
    handleKeyUp = event => {
      console.log("Entering password...");
    };
    render() {
      return (
        <form>
          Password:{" "}
          <input
            onChange={this.handleChange}
            onKeyUp={this.handleKeyUp}
            name="password"
            type="password"
            value={this.state.password}
          />
        </form>
      );
    }
  }
  
  export default Keypad;
  