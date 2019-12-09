import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron text-center">
          <h1 className="display-4">Parfore</h1>
          <p className="lead">
            This is a simple golf club recommendation app! Stay tuned for more
            exciting golf features!
          </p>
        </div>
        <div className="container">
          <div className="row">
            <a className="btn btn-success btn-lg btn-block" href="/recommend">
              Recommend My Club
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
