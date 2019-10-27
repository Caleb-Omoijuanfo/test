import React from 'react';
import { IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Popup from "reactjs-popup";
import axios from 'axios';
import formurlencoded from 'form-urlencoded';

class GridData extends React.Component {
  state = {
    users: [],
    isLoading: false
  }

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
  render(){
    const { users, error, isLoading } = this.state;
    return(
      <div className="table-responsive">
      <table className="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Date of Birth</th>
          <th scope="col">Age</th>
          <th scope="col">Height</th>
          <th scope="col">Weight</th>
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
          <tr key={user._id}>
            <th className="data-row" scope="row">{user.id}</th>
            <td className="data-row">{user.firstName}</td>
            <td className="data-row">{user.surName}</td>
            <td className="data-row">{user.dob}</td>
            <td className="data-row">{user.age}</td>
            <td className="data-row">{user.height}</td>
            <td className="data-row">{user.weight}</td>
            <td>
              <IconButton data-toggle="modal" data-target="#exampleModal"><EditIcon /></IconButton>
              <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">New message</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="form-group">
                          <label htmlFor="recipient-name" className="col-form-label">Recipient:</label>
                          <input type="text" className="form-control" id="recipient-name" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="message-text" className="col-form-label">Message:</label>
                          <textarea className="form-control" id="message-text"></textarea>
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary">Send message</button>
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
    );
  }
}

export { GridData }
