import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';

// Component Imports
import Login from './components/login.component';
import Register from './components/register.component';
import CreateSession from './components/create-game-session.component';
import JoinSession from './components/join-game-session.component';

class App extends Component {
  render() {
    return (
      <Router>

        <div className='container'>

        <Navbar bg="light" expand="lg">
          <Navbar.Brand><Link to="/" className="navbar-brand">Parfore</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/create">Create</Nav.Link>
              <Nav.Link href="/join">Join</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>





          <Route path='/' exact component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/create' component={CreateSession} />
          <Route path='/join' component={JoinSession} />
        </div>
      </Router>
    );
  }
}

export default App;
