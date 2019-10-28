import React from 'react';

class Form2 extends React.Component {
  render(){
    if (this.props.currentForm !== 2) {
      return null;
    }
    return(
      <>
        <div className="form-element">
          <label htmlFor="age">Age</label>
          <p>
            <input type="text" value={this.props.age} pattern="^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$" onChange={this.props.handleChange} placeholder="" name="age" id="age" autoFocus={true} required/>
          </p>
        </div>

        <div className="form-element">
          <label htmlFor="height">Height</label>
          <p>
            <input type="text" value={this.props.height} onChange={this.props.handleChange} placeholder="Height in metres e.g. 1.75m" name="height" id="height" autoFocus={true} required/>
          </p>
        </div>

        <div className="form-element">
          <label htmlFor="weight">Weight</label>
          <p>
            <input type="text" value={this.props.weight} onChange={this.props.handleChange} placeholder="Weight in kilogrammes e.g. 78kg" name="weight" id="weight" autoFocus={true} required/>
          </p>
        </div>
      </>
    );
  }
}


export { Form2 };
