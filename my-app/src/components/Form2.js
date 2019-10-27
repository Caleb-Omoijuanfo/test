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
            <input type="text" value={this.props.age} onChange={this.props.handleChange} placeholder="" name="age" id="age" autoFocus={true}/>
          </p>
        </div>

        <div className="form-element">
          <label htmlFor="height">Height</label>
          <p>
            <input type="text" value={this.props.height} onChange={this.props.handleChange} name="height" id="height" autoFocus={true}/>
          </p>
        </div>

        <div className="form-element">
          <label htmlFor="weight">Weight</label>
          <p>
            <input type="text" value={this.props.weight} onChange={this.props.handleChange} placeholder="" name="weight" id="weight" autoFocus={true}/>
          </p>
        </div>
      </>
    );
  }
}

export { Form2 };
