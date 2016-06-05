import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.textColor = props.textColor;
  }
  render() {
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-collapse collapse" id="footer">
              <ul className="nav navbar-nav">
                <li><a href='/'><div style={{color: this.textColor }}><i className="fa fa-home" aria-hidden="true"></i> home</div></a></li>
                <li><Link to="contact"><div style={{color: this.textColor }}><i className="fa fa-envelope-o" aria-hidden="true"></i> contact</div></Link></li>
                <li><Link to='about'><div style={{color: this.textColor }}><i className="fa fa-smile-o" aria-hidden="true"></i> about me</div></Link></li>
                <li><Link to='projects'><div style={{color: this.textColor }}><i className="fa fa-code-fork" aria-hidden="true"></i> projects</div></Link></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="https://linkedin.com/in/michaelberber"><div style={{color: this.textColor }}><i className="fa fa-linkedin" aria-hidden="true"></i> LinkedIn</div></a></li>
                <li><a href="https://github.com/mickberber"><div style={{color: this.textColor }}><i className="fa fa-github-alt" aria-hidden="true"></i> Github</div></a></li>
                <li><a href="https://medium.com/@steedhelix"><div style={{color: this.textColor }}><i className="fa fa-medium" aria-hidden="true"></i> Blog</div></a></li>
                <li><a href="https://twitter.com/steedhelix"><div style={{color: this.textColor }}><i className="fa fa-twitter" aria-hidden="true"></i> Twitter</div></a></li>
              </ul>
            </div>
          </div>
        </nav>
    );
  }
}
