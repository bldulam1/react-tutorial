import React, { Component } from 'react';
import Coin from './Coin';
import './CoinFlip.css'
import { genRandom } from '../utils/numbers';
const SIDES = 2;

class CoinFlip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideIndex: genRandom(SIDES),
      flip0Count: 0,
      flip1Count: 0
    };
  }

  flip = () => {
    const randN = genRandom(SIDES);
    let {flip0Count, flip1Count} = this.state;

    randN ? flip1Count++ : flip0Count++;

    this.setState({
      sideIndex: randN,
      flip0Count: flip0Count,
      flip1Count: flip1Count,
    });
  }

  render() {
    const {sideIndex, flip0Count, flip1Count} = this.state;
    const totalFlips = flip0Count + flip1Count;
    const percentage = totalFlips
      ? flip0Count / totalFlips
      : 0;

    return (
      <div className='CoinFlip'>
        <Coin sideIndex={sideIndex} />
        <button className='CoinFlip-flip-btn' onClick={this.flip}>Flip</button>
        <h5> P(H) = {percentage.toFixed(2)} {flip0Count}/{totalFlips} </h5>
      </div>
    );
  }
}

export default CoinFlip;