import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div>
        { process.env.REACT_APP_API_SERVER }
      </div>
    );
  }
}

export default App
