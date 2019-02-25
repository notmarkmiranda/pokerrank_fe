import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'

import '../stylesheets/NavigationBar.css'

class NavigationBar extends Component {
  render() {
    return(
      <Navbar bg="light" expand="lg">
        <div className="container">
          <Navbar.Brand>Poker<span>Rank</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#" className="navbar-link">Public Leagues</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    )
  }
}

export default NavigationBar
