import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";

class NavigationBar extends Component {
  render() {
    return (
      <Navbar
        bg="success"
        variant="dark"
        expand="lg"
        className="mb-5 justify-content-center transparent"
      >
        <Navbar.Brand href="/">
          <i className="fab fa-pied-piper"></i> Parfore
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default NavigationBar;
