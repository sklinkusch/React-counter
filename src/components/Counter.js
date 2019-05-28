import React, { Component } from 'react'

export default class Counter extends Component {
  increment = () => {
    console.log("Want to increment")
  }
  decrement = () => {
    console.log("Want to decrement")
  }
  render() {
    return (
      <div>
        <h2>Counter with Redux</h2>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <h2>I am a number</h2>
      </div>
    )
  }
}
