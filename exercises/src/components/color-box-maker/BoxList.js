import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';
import uuid from 'uuid/v4';
class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = { boxes: [] };
    this.addBox = this.addBox.bind(this);
  }
  addBox(box){
    const newBox = {
      width: Number(box.width),
      height: Number(box.height),
      backgroundColor: box.backgroundColor
    }

    this.setState({
      boxes: [...this.state.boxes, newBox]
    })
  }

  render() {
    const {boxes} = this.state;
    const boxElements = boxes.map(box => <Box key={uuid()} box={box}/>);

    return (
      <div className='BoxList'>
        <NewBoxForm addBox={this.addBox} />
        {boxElements}
      </div>
    );
  }
}

export default BoxList;