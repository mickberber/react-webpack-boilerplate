import React from 'react';
import { Component } from 'react';
import CN from 'classnames';

class LogoWall extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    const classes = CN(this.props.wall, this.props.class, 'center');
    return (
      <div className={classes}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-2' />
            <div className='col-md-8'> aboutme: </div>
            <div className='col-md-2' />
          </div>
        </div>
      </div>
    );
  }
}

export default LogoWall;
