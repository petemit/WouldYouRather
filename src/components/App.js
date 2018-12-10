import React, { Component } from 'react';
import Logon from './Logon';

class App extends Component {
  componentDidMount() {
    const currentUser = this.props.currentUser
    if (currentUser === undefined) {
      //

    }
  }
  
  render() {
    return (
      <div className="container">
          <Logon />
      </div>
    );
  }
}

export default App;
