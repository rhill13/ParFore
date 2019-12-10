import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import ClubRecommendation from "./components/club-recommend.component";
import Home from "./components/home.component";
import NavigationBar from "./components/navigation-bar.component";

// App Component that contains Navigation and Router Components
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavigationBar />

          <Route path="/" exact component={Home} />
          <Route path="/recommend" component={ClubRecommendation} />
        </div>
      </Router>
    );
  }
}

export default App;
