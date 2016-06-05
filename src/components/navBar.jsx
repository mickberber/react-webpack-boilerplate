import React, { Component } from 'react';
import { Link } from 'react-router';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
            <ul className="nav navbar-nav">
              <li><a href='/'><img className="mbLogoSm" src="./assets/mblogosm.png"/></a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="https://linkedin.com/in/michaelberber" style={{color:'black'}}><i style={{color:'black'}} className="fa fa-linkedin" aria-hidden="true"></i> LinkedIn</a></li>
              <li><a href="https://github.com/mickberber" style={{color:'black'}}><i style={{color:'black'}} className="fa fa-github-alt" aria-hidden="true"></i> Github</a></li>
              <li><a href="https://medium.com/@steedhelix" style={{color:'black'}}><i style={{color:'black'}} className="fa fa-medium" aria-hidden="true"></i> Blog</a></li>
              <li><a href="https://twitter.com/steedhelix" style={{color:'black'}}><i style={{color:'black'}} className="fa fa-twitter" aria-hidden="true"></i> Twitter</a></li>
            </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar;
