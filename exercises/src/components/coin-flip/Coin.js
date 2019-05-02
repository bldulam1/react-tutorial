import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    const {sideIndex} = this.props;
    const sides = ['heads', 'tails'];
    return (
      <div className='Coin'>
        <img src={`https://tinyurl.com/react-coin-${sides[sideIndex]}-jpg`} alt=""/>
      </div>
    );
  }
}

export default Coin;