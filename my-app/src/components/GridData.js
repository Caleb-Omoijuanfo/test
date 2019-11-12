import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { UpdateModal } from './Modal';
import axios from 'axios';
import formurlencoded from 'form-urlencoded';

class GridData extends React.Component {
  state = {
    users: [],
    isLoading: false,
    firstName: '',
    surName: '',
    dob: '',
    age: '',
    height: '',
    weight: ''
  }


  //Delete record
  handleDelete = (id) => {
    axios({
      url: 'http://localhost:5000/user',
      method: 'delete',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: formurlencoded({
        id: id
      })
    })
    .then(res => {
      //Update state of data after delete
      this.setState({
        isLoading: true
      })
      axios.get('http://localhost:5000/user')
      .then(res => {
        const users = res.data.data.map(
          obj => obj
        );
        this.setState({ users });
        })
      .finally(() =>{
          this.setState({isLoading: false})
        })
      })
      .catch(error => {
    })
  };

  //Sort users by first name
  sortFirstName = () => {
    axios.get('http://localhost:5000/user/fa')
    .then(res => {
      const users = res.data.data.map(
        obj => obj
      )
      this.setState({ users });
    })
    .catch(error =>{
      console.log(error);
    })
  }

  //Sort users by Last name
  sortLastName = () => {
    axios.get('http://localhost:5000/user/sa')
    .then(res => {
      const users = res.data.data.map(
        obj => obj
      )
      this.setState({ users });
    })
    .catch(error =>{
      console.log(error);
    })
  }

  updateFirstName = (id) => {
    console.log(id);
    axios({
      url: 'http://localhost:5000/user/firstName',
      method: 'put',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: formurlencoded({
        id: id,
        firstName: this.state.firstName
      })
    })
    .then(res => {
      //Trigger component re-render to update state of data
      this.setState({
        isLoading: true
      })
      axios.get('http://localhost:5000/user')
      .then(res => {
        const users = res.data.data.map(
          obj => obj
        );
        this.setState({ users });
      })
      .finally(() =>{
        this.setState({isLoading: false})
      })
    })
    .catch(error => {
      console.log(error.message);
    })
  };

  updateLastName = (id) => {
    axios({
      url: 'http://localhost:5000/user/lastName',
      method: 'put',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: formurlencoded({
        id: id,
        surName: this.state.surName
      })
    })
    .then(res => {
      //Trigger component re-render to update state of data
      this.setState({
        isLoading: true
      })
      axios.get('http://localhost:5000/user')
      .then(res => {
        const users = res.data.data.map(
          obj => obj
        );
        this.setState({ users });
      })
      .finally(() =>{
        this.setState({isLoading: false})
      })
    })
    .catch(error => {
      console.log(error.message);
    })
  };

  updateDob = (id) => {
    axios({
      url: 'http://localhost:5000/user/dob',
      method: 'put',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: formurlencoded({
        id: id,
        dob: this.state.dob
      })
    })
    .then(res => {
      //Trigger component re-render to update state of data
      this.setState({
        isLoading: true
      })
      axios.get('http://localhost:5000/user')
      .then(res => {
        const users = res.data.data.map(
          obj => obj
        );
        this.setState({ users });
      })
      .finally(() =>{
        this.setState({isLoading: false})
      })
    })
    .catch(error => {
      console.log(error.message);
    })
  };

  updateAge = (id) => {
    axios({
      url: 'http://localhost:5000/user/age',
      method: 'put',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: formurlencoded({
        id: id,
        age: this.state.age
      })
    })
    .then(res => {
      //Trigger component re-render to update state of data
      this.setState({
        isLoading: true
      })
      axios.get('http://localhost:5000/user')
      .then(res => {
        const users = res.data.data.map(
          obj => obj
        );
        this.setState({ users });
      })
      .finally(() =>{
        this.setState({isLoading: false})
      })
    })
    .catch(error => {
      console.log(error.message);
    })
  };

  updateHeight = (id) => {
    axios({
      url: 'http://localhost:5000/user/height',
      method: 'put',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: formurlencoded({
        id: id,
        height: this.state.height
      })
    })
    .then(res => {
      //Trigger component re-render to update state of data
      this.setState({
        isLoading: true
      })
      axios.get('http://localhost:5000/user')
      .then(res => {
        const users = res.data.data.map(
          obj => obj
        );
        this.setState({ users });
      })
      .finally(() =>{
        this.setState({isLoading: false})
      })
    })
    .catch(error => {
      console.log(error.message);
    })
  };

  updateWeight = (id) => {
    axios({
      url: 'http://localhost:5000/user/weight',
      method: 'put',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: formurlencoded({
        id: id,
        weight: this.state.weight
      })
    })
    .then(res => {
      //Trigger component re-render to update state of data
      this.setState({
        isLoading: true
      })
      axios.get('http://localhost:5000/user')
      .then(res => {
        const users = res.data.data.map(
          obj => obj
        );
        this.setState({ users });
      })
      .finally(() =>{
        this.setState({isLoading: false})
      })
    })
    .catch(error => {
      console.log(error.message);
    })
  };

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  };

  componentDidMount(){
    axios.get('http://localhost:5000/user')
    .then(res => {
      const users = res.data.data.map(
        obj => obj
      );
      this.setState({ users });
    })
    .catch(error => {
      this.setState(() => {
        return {
          error: error.message
        }
      })
    })
  }

  renderSort(){
    return(
      <div className="btn-group">
        <button type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Sort
        </button>
        <div className="dropdown-menu">
          <button className="dropdown-item" onClick={this.sortFirstName}>First Name</button>
          <button className="dropdown-item" onClick={this.sortLastName}>Last Name</button>
        </div>
      </div>
    )
  };

  render(){
    const { users, error, isLoading } = this.state;
    return(
      <>
      <div className = "paper-container">
        <Paper className="grid-paper">
          <div className="table-responsive">
          <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Date of Birth</th>
              <th scope="col">Age</th>
              <th scope="col">Height (m)</th>
              <th scope="col">Weight (kg)</th>
            </tr>
          </thead>
          <tbody>
            {
              isLoading ? (
                <span>Loading...</span>
              ): error ? (
                <span>{error.message}</span>
              ): (
              users.map(user => (
              <tr key={user.id}>
                <th className="data-row" scope="row">{user.id}</th>
                <td className="data-row">{user.firstName}</td>
                <td className="data-row">{user.surName}</td>
                <td className="data-row">{user.dob}</td>
                <td className="data-row">{user.age}</td>
                <td className="data-row">{user.height}</td>
                <td className="data-row">{user.weight}</td>
                <td className="data-row" id={user.id}>
                  <UpdateModal
                    unique={user.id}
                    updateFirstName={() => this.updateFirstName(user.id)}
                    updateLastName={() => this.updateLastName(user.id)}
                    updateDob={() => this.updateDob(user.id)}
                    updateAge={() => this.updateAge(user.id)}
                    updateHeight={() => this.updateHeight(user.id)}
                    updateWeight={() => this.updateWeight(user.id)}
                    handleChange={this.handleChange}
                    firstName={this.state.firstName}
                    surName={this.state.surName}
                    dob={this.state.dob}
                    age={this.state.age}
                    height={this.state.height}
                    weight={this.state.weight}
                  />
                </td>
                <td>
                  <IconButton
                    onClick={() => this.handleDelete(user.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </td>
              </tr>
            )))}
          </tbody>
        </table>
        </div>
      </Paper>
    </div>
    <div>
      {this.renderSort()}
    </div>
    </>
    );
  }
}

export { GridData };
