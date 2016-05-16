import React from 'react';
import { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class NavBar extends Component {
  render() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">
              <img src='./src/assets/mblogoa.png'></img>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav>
          <NavDropdown eventKey={3} title="Projects" id="basic-nav-dropdown">
            <MenuItem href='http://gilson.herokuapp.com'>
            <i className="fa fa-area-chart"></i> Team Rubicon Mobilizer
            </MenuItem>
            <MenuItem href='http://chutte.com'>
            <i className="fa fa-umbrella"></i> Chutte
            </MenuItem>
            <MenuItem href='http://socialflix.herokuapp.com'>
            <i className="fa fa-film"></i> Socialflix
            </MenuItem>
            <MenuItem href='http://tinnrplusplus.herokuapp.com'>
              <i className="fa fa-plus-circle"></i> Tinnr
            </MenuItem>
            <MenuItem href='http://github.com/mickberber/mcTesting'>
              <i className='fa fa-flask'></i> McTesting
            </MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="https://www.linkedin.com/in/michaelberber">
          <img src='./src/assets/In-2C-28px-R.png'></img>
          LinkedIn</NavItem>
          <NavItem eventKey={2} href="https://www.github.com/mickberber">
          <img src='./src/assets/github-32.png'> </img>
          Github</NavItem>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
