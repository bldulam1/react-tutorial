import React, { Component } from 'react';

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: null
    };
  }
  render() {
    return (
      <div>
        Deck
      </div>
    );
  }
}

export default Deck;