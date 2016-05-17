import React from 'react';
import { Component } from 'react';
import CN from 'classnames';

class LogoWall extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    const classesWall = CN(this.props.wall, this.props.background, 'center', 'container');
    return (
      <div className={classesWall}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-2' />
            <div className='col-md-8 center'>
              This site was built with:
              <img style={{height: '100px', width: '70px'}}src='./../assets/wallAssets/reactjs.png' />
              And deployed on:
              <img style={{height: '100px', width: '120px'}}src='./../assets/wallAssets/heroku.png' />
            </div>
            <div className='col-md-2' />
          </div>
        </div>
      </div>
    );
  }
}

export default LogoWall;
