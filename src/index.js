import React from 'react';
import ReactDOM from 'react-dom';

import Keypad from './components/Keypad';
import EyesOnMe from './components/EyesOnMe';

class App extends React.Component {
  render() {
    return (
      <div>
        <Keypad keypad={this.Keypad} />
        <EyesOnMe eyesonme={this.EyesOnMe} />
      </div>
    );
  }
}




const rootElement =document.getElementById('global')
ReactDOM.render(<App />, rootElement);

