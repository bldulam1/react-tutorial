import React, { Component } from 'react';

class Clicker extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 1 };
  }

  onBtnClick = () => {
    let rand = 1;
    while(rand === this.state.num) {
      rand = Math.floor(Math.random() * 10 + 1);
    }

    this.setState({num: rand});
  }
  render() {
    let {num} = this.state;
    return (
      <div>
        <h1>Number is {num} </h1>
        {num === 7 
          ? <h2>You Win!</h2>
          : <button onClick={this.onBtnClick}>Generate</button>
        }
      </div>
    );
  }
}

export default Clicker;