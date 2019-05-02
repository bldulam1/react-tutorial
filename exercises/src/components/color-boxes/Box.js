import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    const {color, onClick, index} = this.props;
    return (
      <div className='Box' style={{backgroundColor: color}} onClick={()=>onClick(index)}>
      </div>
    );
  }
}

export default Box;