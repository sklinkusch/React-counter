import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';

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
          <Counter />
        </div>
      </div>
    );
  }
}

export default App;
