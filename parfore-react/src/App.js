import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Component Imports
import LoginSignup from './components/login-signup.component';

class App extends Component {
  render() {
    return (
      <Router>

        






        <Route path='/' exact component={LoginSignup} />

      </Router>
    );
  }
}

export default App;
