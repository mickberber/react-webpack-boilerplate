import React from 'react';
import { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class NavBar extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Mb</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} href="https://www.linkedin.com/in/michaelberber">
          <img src='./src/assets/In-2C-28px-R.png'></img>
          LinkedIn</NavItem>
          <NavItem eventKey={2} href="https://www.github.com/mickberber">
          <img src='./src/assets/GitHub-Mark-32px.png'></img>
          Github</NavItem>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
