import React, { Component } from 'react';
import { Link } from 'react-router';

export default class ProjectFooter extends Component {
  render() {
    return (
        <nav className="navbar navbar-inverse navbar-fixed-bottom">
          <div className="container-fluid">
            <div className="navbar-collapse collapse" id="footer">
              <ul className="nav navbar-nav">
                <li><a href='/'><i className="fa fa-home" aria-hidden="true"></i> home</a></li>
                <li><Link to='about'><i className="fa fa-smile-o" aria-hidden="true"></i> about me</Link></li>
                <li><Link to="contact"><i className="fa fa-envelope-o" aria-hidden="true"></i> contact</Link></li>
                <li><Link to='projects'><i className="fa fa-code-fork" aria-hidden="true"></i> projects</Link></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="https://linkedin.com/in/michaelberber"><i className="fa fa-linkedin" aria-hidden="true"></i> LinkedIn</a></li>
                <li><a href="https://github.com/mickberber"><i className="fa fa-github-alt" aria-hidden="true"></i> Github</a></li>
                <li><a href="https://medium.com/@steedhelix"><i className="fa fa-medium" aria-hidden="true"></i> Blog</a></li>
                <li><a href="https://twitter.com/steedhelix"><i className="fa fa-twitter" aria-hidden="true"></i> Twitter</a></li>
              </ul>
            </div>
          </div>
        </nav>
    );
  }
}
