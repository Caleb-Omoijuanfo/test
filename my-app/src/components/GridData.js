import React from 'react';
import { IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Paper } from '@material-ui/core';
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
  };

  updateLastName = (id) => {
    axios({
      url: 'http://localhost:5000/user/surName',
      method: 'put',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: formurlencoded({
        id: id,
        surName: this.state.surName
      })
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
                <td>
                  <IconButton data-toggle="modal" data-target="#exampleModal"><EditIcon /></IconButton>
                  <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Update record</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <div className="input-group mb-3">
                            <input type="text" className="form-control" name="firstName" value={this.state.firstName} onChange={this.handleChange} placeholder="First Name" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                              <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => this.updateFirstName(user.id)}>Update</button>
                            </div>
                          </div>
                          <div className="input-group mb-3">
                            <input type="text" className="form-control" name="surName" value={this.state.surName} onChange={this.handleChange} placeholder="Last Name" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                              <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => this.updateLastName(user.id)}>Update</button>
                            </div>
                          </div>
                          <div className="input-group mb-3">
                            <input type="text" className="form-control" name="dob" value={this.state.dob} onChange={this.handleChange} placeholder="Date of Birth" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                              <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => this.updateDob(user.id)}>Update</button>
                            </div>
                          </div>
                          <div className="input-group mb-3">
                            <input type="text" className="form-control" name="age" value={this.state.age} onChange={this.handleChange} placeholder="Age" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                              <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => this.updateAge(user.id)}>Update</button>
                            </div>
                          </div>
                          <div className="input-group mb-3">
                            <input type="text" className="form-control" name="height" value={this.state.height} onChange={this.handleChange} placeholder="Height" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                              <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => this.updateHeight(user.id)}>Update</button>
                            </div>
                          </div>
                          <div className="input-group mb-3">
                            <input type="text" className="form-control" name="weight" value={this.state.weight} onChange={this.handleChange} placeholder="Weight" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                              <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => this.updateWeight(user.id)}>Update</button>
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
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

export { GridData }
//
// <form>
//   <div className="form-group">
//     <label htmlFor="recipient-name" className="col-form-label">Recipient:</label>
//     <input type="text" className="form-control" id="recipient-name" />
//   </div>
//   <div className="form-group">
//     <label htmlFor="message-text" className="col-form-label">Message:</label>
//     <textarea className="form-control" id="message-text"></textarea>
//   </div>
// </form>
