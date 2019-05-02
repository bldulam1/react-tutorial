import React, { Component } from 'react';
import './Die.css'

class Die extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    const {value, isRolling} = this.props;
    const nums = ['one', 'two', 'three', 'four', 'five', 'six'];
    return (
      <i className={`Die fas fa-dice-${nums[value]} ${isRolling && 'shaking'}`}></i>
    );
  }
}

export default Die;