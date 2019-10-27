import React from 'react';
import { MasterForm } from './MasterForm';
import { GridData } from './GridData';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Navigation extends React.Component {
  render(){
    return(
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Test</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto"></ul>
            <span className="navbar-nav">
              <Link to="/data" className="nav-item nav-link">View Record</Link>
            </span>
          </div>
        </nav>

        <Route exact path="/" component={MasterForm}/>
        <Route path="/data" component={GridData}/>
      </Router>
    );
  }
}

export { Navigation };
