import React from 'react';
import { MasterForm } from './MasterForm';
import { GridData } from './GridData';
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';

class Navigation extends React.Component {
  render(){
    return(
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">Navbar</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="" className="nav-item nav-link active">Add Record</Link>
              <Link to="/data" className="nav-item nav-link">View Record</Link>
            </div>
          </div>
        </nav>

        <Route exact path="/" component={MasterForm}/>
        <Route path="/data" component={GridData}/>
      </Router>
    );
  }
}

export { Navigation };
