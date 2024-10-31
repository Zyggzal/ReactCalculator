import React from 'react'
import './App.css';
import Calculator from './Calculator/Calculator'

class App extends React.Component {
  state = {
    result: 0
  }
  showResult = (res) => {
    this.setState({ result: res})
  }
  render () {
    return (<div className="App">
      <Calculator onResult={this.showResult}></Calculator>
      <h1>{this.state.result}</h1>
    </div>
    )
  }
}

export default App;
