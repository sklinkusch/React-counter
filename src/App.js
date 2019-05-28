import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: true,
      count: 0,
    }
  }

  Reset = () => {
    this.setState(
      { count: 0 }
    )
  }

  updateCounter = (type) => {
    switch (type) {
      case 'INCREMENT':
        console.log("going to increment");
        return this.setState(state => {
          return {
            count: state.count + 1
          };
        });
      case 'DECREMENT':
        console.log("going to decrement");
        return this.setState(state => {
          return {
            count: state.count - 1
          };
        });
      default:
        console.log("unknown type, returning state");
        return this.setState(state => {
          return {
            count: state.count
          };
        });
    }
  }

  ToggleClick = () => {
    this.setState(
      prevState => {
        return { show: !prevState.show }
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <h2>Counter and Toggle - Update</h2>
          <button onClick={() => this.updateCounter('INCREMENT')}>Click to increment by 1</button>
          <button onClick={() => this.updateCounter('DECREMENT')}>Click to decrease by 1</button>
          <button onClick={this.ToggleClick}>
            {this.state.show ? 'Hide number' : 'Show number'}
          </button>
          <button onClick={this.Reset}>Reset</button>
          {this.state.show ? <h2>{this.state.count}</h2> : ''}
        </div>
      </div>
    );
  }
}

export default App;
