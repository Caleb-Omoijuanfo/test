import React from 'react';

class Form1 extends React.Component {
  render(){
    if (this.props.currentForm !== 1) {
      return null;
    }
    return(
      <>
        <div className="form-element">
          <label htmlFor="firstName">First Name</label>
          <p>
            <input type="text" value={this.props.firstName} onChange={this.props.handleChange} name="firstName" id="firstName" autoFocus={true} required/>
          </p>
        </div>

        <div className="form-element">
          <label htmlFor="surName">Surname</label>
          <p>
            <input type="text" value={this.props.surName} onChange={this.props.handleChange} name="surName" id="surName" autoFocus={true} required/>
          </p>
        </div>

        <div className="form-element">
          <label htmlFor="dob">Date of Birth</label>
          <p>
            <input type="text" value={this.props.dob} placeholder="e.g 15/04/1998" onChange={this.props.handleChange} name="dob" id="dob" autoFocus={true} required/>
          </p>
        </div>
      </>
    );
  }
}

export { Form1 };
