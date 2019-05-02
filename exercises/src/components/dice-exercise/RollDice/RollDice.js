import React, { Component } from 'react';
import Die from '../Die/Die';
import './RollDice.css';
import { genRandom } from '../../utils/numbers';


class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      die1: genRandom(6),
      die2: genRandom(6),
      isRolling: false,
    };
  }

  roll = () => {
    this.setState({
      die1: genRandom(6),
      die2: genRandom(6),
      isRolling: true,
    })

    setTimeout(() => {
      this.setState({isRolling: false})
    }, 1000);
  }
  render() {
    const {die1, die2, isRolling} = this.state;
    return (
      <div className='RollDice'>
        <div className='RollDice-dice'>
          <Die key={1} value={die1} isRolling={isRolling} />
          <Die key={2} value={die2} isRolling={isRolling} />
        </div>
        <button onClick = {this.roll} disabled={isRolling}>
          {isRolling ? 'Rolling...' : 'Roll Dice'}
        </button>
      </div>
    );
  }
}

export default RollDice;