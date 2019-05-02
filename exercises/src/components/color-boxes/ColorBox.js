import React, { Component } from 'react';
import { genRandom } from '../utils/numbers';
import Box from './Box';
import './ColorBox.css'


const colorList = [
  '#F44336','#E91E63','#9C27B0','#673AB7','#3F51B5',
  '#2196F3','#03A9F4','#00BCD4','#009688','#4CAF50',
  '#8BC34A','#CDDC39','#FFEB3B','#FFC107','#FF9800',
  '#FF5722','#795548','#9E9E9E','#607D8B','#000000',
]

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {squares: this.generateRandomColors(18)};
  }

  generateRandomColors(arrayLen) {
    return Array.from({length: arrayLen}, ()=>colorList[genRandom(colorList.length)])
  }

  updateColor = index =>{
    const {squares} = this.state;
    squares[index] = colorList[genRandom(colorList.length)];

    this.setState({squares: squares});
  }
  render() {
    const {squares}= this.state;
    const boxes = squares.map((square, index) => (
      <div key={`box-${index}`} className='ColorBox-square'>
        <Box color={square} index={index} onClick={index=> this.updateColor(index)} />
      </div>
    ));

    return (
      <div className='ColorBox'>
        {boxes}
      </div>
    );
  }
}

export default ColorBox;