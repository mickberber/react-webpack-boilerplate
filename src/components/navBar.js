import React from 'react';
import { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class NavBar extends Component {
  render() {
    return (
      <Navbar className='container'>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">
              <img src='./src/assets/rsz_mb-logo.png'></img>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav>
          <NavDropdown eventKey={3} title="Projects" id="basic-nav-dropdown">
            <MenuItem href='http://tinnrplusplus.herokuapp.com'>Tinnr++</MenuItem>
            <MenuItem href='http://gilson.herokuapp.com'>Team Rubicon Mobilizer</MenuItem>
            <MenuItem href='http://socialflix.herokuapp.com'>Socialflix</MenuItem>
            <MenuItem href='http://chutte.com'>Chutte</MenuItem>
          </NavDropdown>
        </Nav>
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
