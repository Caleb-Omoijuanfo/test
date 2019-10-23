import React from 'react';

class Form1 extends React.Component {
  render(){
    if (this.props.currentForm !== 1) {
      return null;
    }
    return(
      <>
        <div className="form-element">
          <label for="firstName">First Name</label>
          <p>
            <input type="text" name="firstName" id="firstName" autofocus="true"/>
          </p>
        </div>

        <div className="form-element">
          <label for="SurName">Surname</label>
          <p>
            <input type="text" name="firstName" id="SurName" autofocus="true"/>
          </p>
        </div>

        <div className="form-element">
          <label for="dob">Date of Birth</label>
          <p>
            <input type="date" name="firstName" id="dob" autofocus="true"/>
          </p>
        </div>
      </>
    );
  }
}

export { Form1 };
