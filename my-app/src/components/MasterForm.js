import React from 'react';
import { Form1 } from './Form1';
import { Form2 } from './Form2';
import { Paper } from '@material-ui/core';
import axios from 'axios';
import formurlencoded from 'form-urlencoded';

class MasterForm extends React.Component {
  state = {
    currentForm: 1,
    firstName: '',
    surName: '',
    dob:'',
    age: '',
    height: '',
    weight: ''
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    axios({
      url: 'http://localhost:5000/user',
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: formurlencoded({
        firstName: this.state.firstName,
        surName: this.state.surName,
        dob: this.state.dob,
        age: this.state.age,
        height: this.state.height,
        weight: this.state.weight
      })
    })
    .then(function (response){
      alert('Successful submit!!');
      console.log(response);
    })
    .catch(function (error){
      console.log(error);
    })

    this.setState({
      currentForm: 1,
      firstName: '',
      surName: '',
      dob: '',
      age: '',
      height: '',
      weight: ''
    })
  }

  next = () => {
    let currentForm = this.state.currentForm
    currentForm = currentForm >= 1 ? 2 : null
    this.setState({
      currentForm: currentForm
    })
  }

  nextButton(){
    let currentForm = this.state.currentForm;
    if(currentForm < 2){
      return (
        <button
          className="btn btn-primary float-right form-button"
          type="button" onClick={this.next}>
        Next
        </button>
      )
    }
    return null;
  }

  submitButton(){
    let currentForm = this.state.currentForm;
    if(currentForm === 2){
      return (
        <button
          className="btn btn-primary float-right form-button"
          type="submit">
        Submit
        </button>
      )
    }
    return null;
  }

  prev = () => {
    let currentForm = this.state.currentForm
    currentForm = currentForm <= 1? 1: currentForm - 1
    this.setState({
      currentForm: currentForm
    })
  }

  previousButton() {
    let currentForm = this.state.currentForm;
    if(currentForm !== 1){
      return (
        <button
          className="btn btn-secondary form-button"
          type="button" onClick={this.prev}>
        Previous
        </button>
      )
    }
    return null;
  }


  render(){
    const { currentForm } = this.state;
    return(
      <div className="form-container">
        <Paper className="paper">
          <form onSubmit={this.handleSubmit}>
            <Form1
              currentForm={currentForm}
              firstName={this.state.firstName}
              surName={this.state.surName}
              dob={this.state.dob}
              handleChange={this.handleChange}
            />
            <Form2
              currentForm={currentForm}
              height={this.state.height}
              age={this.state.age}
              weight={this.state.weight}
              handleChange={this.handleChange}
            />
            {this.previousButton()}
            {this.nextButton()}
            {this.submitButton()}
          </form>
        </Paper>
      </div>
    );
  }
}

export { MasterForm };
