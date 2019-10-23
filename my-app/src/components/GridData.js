import React from 'react';
import { IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

class GridData extends React.Component {
  render(){
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
          <th scope="col">Hair Colour</th>
          <th scope="col">Weight</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td><IconButton><EditIcon /></IconButton></td>
          <td><IconButton><DeleteIcon /></IconButton></td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td><IconButton><EditIcon /></IconButton></td>
          <td><IconButton><DeleteIcon /></IconButton></td>
        </tr>
      </tbody>
    </table>
    </div>
    );
  }
}

export { GridData }
