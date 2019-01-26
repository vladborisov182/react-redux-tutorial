import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Counter = ({ counter, handleClick, string }) => {
  return (
    <div className='text-center'>
      <h1>{`Counter component. Counter value is: ${counter}. ${string}`}</h1>
      <button className='btn btn-danger' onClick={handleClick}>+1</button>
    </div>
  )
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  string: PropTypes.string,
}

Counter.defaultProps = {
  string: 'default',
}

class CounterButton extends Component {
  state = {
    counter: 0,
  }

  handleClick = () => {
    this.setState(({ counter }) => ({
      counter: ++counter,
    }))
  }

  render() {
    const { counter } = this.state;
    return (
      <div>
        <Counter
          counter={counter}
          handleClick={this.handleClick}
        />
      </div>
    )
  }
}

export default CounterButton;