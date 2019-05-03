import React, { Component } from 'react';
import { genRandom } from '../utils/numbers';
import Cell from './Cell';
import './Board.css';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      solution: [],
      cells: Array.from({length: props.size*props.size}, ()=>false),
      steps: 0,
    };
    this.showSolution = this.showSolution.bind(this);
    this.onCellClick = this.onCellClick.bind(this);
    this.newGame = this.newGame.bind(this);
  }
  static defaultProps = {
    size: 5
  }
  generateCells(size){
    const boardLen = size*size;
    const targetSteps = 8;
    let cells = Array.from({length: boardLen}, ()=>false)
    const solution = [];
    while(solution.length < targetSteps){
      const newSol = genRandom(boardLen);
      solution.indexOf(newSol) < 0 && solution.push(newSol);
    }

    solution.forEach(sol => {
      cells = this.toggleAdjacentCells(cells, sol)
    })
    return {
      cells: cells,
      solution: solution.sort((a,b)=> a>b?1:-1)
    }
  }

  showSolution(){
    const {solution} = this.state;
    console.log(solution);
  }

  newGame(){
    const {cells, solution} = this.generateCells(this.props.size);
    this.setState({
      cells: cells,
      solution: solution,
      steps: 0
    })
  }

  toggleAdjacentCells(cells, index){
    const {size} = this.props;
    const right = index % size < size - 1 ? index + 1 : null,
      left = index % size ? index - 1 : null,
      top = index >= size ? index - size : null,
      down = index < (size * (size-1) ) ? index + size : null;

    right !== null && (cells[right] = !cells[right])
    left !== null && (cells[left] = !cells[left])
    top !== null && (cells[top] = !cells[top])
    down !== null && (cells[down] = !cells[down])
    cells[index] = !cells[index]

    return cells;
  }

  onCellClick(index) {
    const {cells, steps} = this.state;
    this.setState({
      cells: this.toggleAdjacentCells(cells, index),
      steps: steps + 1,
    })
  }
  render() {
    const {cells, steps} = this.state;
    const {size} = this.props;
    const boardCells = cells.map((cell, index) =>
      ( <Cell
          key={`cell-${index}`}
          width={size}
          index={index}
          value={cell}
          click={this.onCellClick}
        />
      )
    );

    const isSolved = 
      (cells.filter(cell => cell).length === 0
      && steps)
      ? <h1>Congratulations! You Win!</h1>
      : null;


    return (
      <div className='Board'>
        <div className='Board-title'>
          <span className='neon'>Lights</span>
          <span className='flux'>Out </span>
        </div>
        <div className='Board-cells'>
          {boardCells}
        </div>
        <h3>Moves: {steps} Target: 8</h3>
        <button onClick={this.newGame}>New Game</button>
        <button onClick={this.showSolution}>Solution</button>
        {isSolved}
      </div>
    );
  }
}

export default Board;