import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const CounterComponent = ({ counter = 0, handleClick }) => {
  return (
    <div className='text-center'>
      <h1>{`Counter component. Counter value is: ${counter}.`}</h1>
      <button className='btn btn-danger' onClick={handleClick}>+1</button>
    </div>
  )
};

CounterComponent.propTypes = {
  counter: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

CounterComponent.defaultProps = {
  string: 'default',
};

export class CounterContainer extends Component {
  static PropTypes = {
    children: PropTypes.element,
  }

  static defaultTypes = {
    children: null,
  }

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
    const { children } = this.props;
    return (
      <div>
        {React.cloneElement(children,
          {
            counter: this.state.counter,
            handleClick: this.handleClick
          }
        )}
      </div>
    )
  }
}