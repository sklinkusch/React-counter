import React, { Component } from 'react'
import { connect } from 'react-redux'

class Counter extends Component {
  increment = () => {
    this.props.dispatch({ type: "INCREASE" })
    console.log("Want to increment")
  }
  decrement = () => {
    this.props.dispatch({ type: "DECREASE" })
    console.log("Want to decrement")
  }
  reset = () => {
    this.props.dispatch({ type: "RESET" })
    console.log("Resetted");
  }
  render() {
    return (
      <div>
        <h2>Counter with Redux</h2>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.reset}>RESET</button>
        <h2>{this.props.count}</h2>
        <h3>Clicks: {this.props.click}</h3>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    count: state.count,
    click: state.click
  }
}

export default connect(mapStateToProps)(Counter);
