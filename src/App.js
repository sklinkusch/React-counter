import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers'
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';

// REMEMBER TO ATTACH THE DEVTOOLS
const store = createStore(reducer)

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
          <Provider store={store} >
            <Counter />
          </Provider>
        </div>
      </div>
    );
  }
}

export default App;
