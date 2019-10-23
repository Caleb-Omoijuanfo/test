import React from 'react';

class Form2 extends React.Component {
  render(){
    if (this.props.currentForm !== 2) {
      return null;
    }
    return(
      <>
        <div className="form-element">
          <label for="height">Height</label>
          <p>
            <input type="text" name="height" id="height" autofocus="true"/>
          </p>
        </div>

        <div className="form-element">
          <label for="hairColor">Hair Color</label>
          <p>
            <input type="text" name="hairColor" id="hairColor" autofocus="true"/>
          </p>
        </div>

        <div className="form-element">
          <label for="weight">Weight</label>
          <p>
            <input type="text" placeholder="" name="weight" id="weight" autofocus="true"/>
          </p>
        </div>
      </>
    );
  }
}

export { Form2 };
