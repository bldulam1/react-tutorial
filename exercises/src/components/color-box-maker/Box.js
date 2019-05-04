import React, { Component } from 'react';

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    // const {height, width, backgroundColor} = this.props.box;
    return (
      <div className='Box' style={this.props.box}>
      </div>
    );
  }
}

export default Box;