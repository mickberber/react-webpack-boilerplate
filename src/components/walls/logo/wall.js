import React from 'react';
import { Component } from 'react';
import CN from 'classnames';

class LogoWall extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    const classesWall = CN(this.props.wall, this.props.background, 'center');
    return (
      <div className={classesWall}>
          <div className='row'>
            <div className='col-xs-3 col-md-2' />
            <div className='col-xs-12 col-md-8 center'>
              This site was built with:
              <img style={{height: '100px', width: '70px'}}src='./../assets/wallAssets/reactjs.png' />
              And deployed on:
              <img style={{height: '100px', width: '120px'}}src='./../assets/wallAssets/heroku.png' />
            </div>
            <div className='col-xs-3 col-md-2' />
          </div>
      </div>
    );
  }
}

export default LogoWall;
