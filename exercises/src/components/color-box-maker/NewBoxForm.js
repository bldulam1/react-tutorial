import React, { Component } from 'react';

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      width: 0,
      backgroundColor: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({[evt.target.name]: evt.target.value})
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addBox(this.state);
  }
  render() {
    const {height, width, backgroundColor} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='NewBoxForm-height'>
          <label htmlFor="height">Height</label>
          <input name="height" value={height} onChange={this.handleChange} type="number"/>
        </div>
        <div className='NewBoxForm-width'>
          <label htmlFor="width">Width</label>
          <input name="width" value={width} onChange={this.handleChange} type="number"/>
        </div>
        <div className='NewBoxForm-background-color'>
          <label htmlFor="backgroundColor">Background Color</label>
          <input name="backgroundColor" value={backgroundColor} onChange={this.handleChange} type="text" autoComplete="off" />
        </div>
        <button type="submit">Create Box</button>
      </form>
    );
  }
}

export default NewBoxForm;