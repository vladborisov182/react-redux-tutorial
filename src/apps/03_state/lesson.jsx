import React, { Component } from 'react';

class ButtonCounter extends Component {
  state = {
    counter: 0,
    more: 'zero',
  }

  handleClickUp = () => {
    this.setState(({ counter, more }) => ({
      counter: ++counter,
      more: 'Up',
    }));
  }

  handleClickDown = () => {
    this.setState(({ counter, more }) => ({
      counter: --counter,
      more: 'Down',
    }));
  }

  handleClickUpMore = () => {
    this.setState(({ counter, more }) => ({
      counter: counter + 100,
      more: 'Up',
    }));
  }

  handleClickDownMore = () => {
    this.setState(({ counter, more }) => ({
      counter: counter - 100,
      more: 'Down',
    }));
  }

  handleClickZero = () => {
    this.setState({
      counter: 0,
      more: 'zero',
    });
  }

  render() {
    const { counter, more } = this.state;

    return (
      <div className='text-center'>
        <h1>{counter}({more})</h1>
        <div className="btn-group">
          <button className="btn btn-danger" onClick={this.handleClickDownMore}>-100</button>
          <button className="btn btn-danger" onClick={this.handleClickDown}>-1</button>
          <button className="btn btn-secondary" onClick={this.handleClickZero}>0</button>
          <button className="btn btn-success" onClick={this.handleClickUp}>+1</button>
          <button className="btn btn-success" onClick={this.handleClickUpMore}>+100</button>
        </div>
      </div>
    );
  }
} 

export default ButtonCounter;