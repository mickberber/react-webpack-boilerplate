import React from 'react';
import { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class NavBar extends Component {
  render() {
    return (
      <Navbar inverse className='container'>
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
            <MenuItem href='http://tinnrplusplus.herokuapp.com'>
              Tinnr <i className="fa fa-plus-circle"></i>
            </MenuItem>
            <MenuItem href='http://gilson.herokuapp.com'>
              Team Rubicon Mobilizer <i className="fa fa-area-chart"></i>
            </MenuItem>
            <MenuItem href='http://socialflix.herokuapp.com'>
              Socialflix <i className="fa fa-film"></i>
            </MenuItem>
            <MenuItem href='http://chutte.com'>
              Chutte <i className="fa fa-umbrella"></i>
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
