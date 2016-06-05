import React, { Component } from 'react';
import { Link } from 'react-router';
import CN from 'classnames';

class HomeWall extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    const classesWall = CN(this.props.wall, this.props.background, 'center');
    return (
      <div className={classesWall}>
          <div className='row row-eq-height'>
            <div className='col-xs-3 col-md-2' />
              <div className='col-xs-12 col-md-8 center' style={{height: '620px'}}>
              </div>
            <div className='col-xs-3 col-md-2' />
          </div>
          <footer>
            <div className="navbar navbar-inverse navbar-fixed-bottom">
              <div className="container">
                <div className="navbar-collapse collapse" id="footer">
                  <ul className="nav navbar-nav">
                    <li><Link to='about'><i className="fa fa-meh-o" aria-hidden="true"></i> about me</Link></li>
                    <li><Link to="contact"><i className="fa fa-envelope-o" aria-hidden="true"></i> contact</Link></li>
                    <li><Link to='projects'><i className="fa fa-code-fork" aria-hidden="true"></i> projects</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
      </div>
    );
  }
}

export default HomeWall;
