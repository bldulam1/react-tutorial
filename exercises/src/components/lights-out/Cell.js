import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    const {value, click, index, width} = this.props;
    const dimensions = {
      width: `${100/(width+1)}%`,
      paddingTop: `${100/(width+1)}%`
    }
    return (
      <div
        className={`Cell ${value && 'Cell-lit'}`}
        onClick={()=>click(index)}
        style={dimensions}>
      </div>
    );
  }
}

export default Cell;