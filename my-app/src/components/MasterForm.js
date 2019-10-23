import React from 'react';
import { Form1 } from './Form1';
import { Form2 } from './Form2';
import { Paper } from '@material-ui/core';

class MasterForm extends React.Component {
  state = {
    currentForm: 1
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
          <form>
            <Form1 currentForm={currentForm}/>
            <Form2 currentForm={currentForm}/>
            {this.previousButton()}
            {this.nextButton()}
          </form>
        </Paper>
      </div>
    );
  }
}

export { MasterForm };
