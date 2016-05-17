import React, { Component } from 'react';
import VideoPlayer from './../../VideoPlayer';
import CN from 'classnames';

class ChutteWall extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    const classesWall = CN(this.props.wall, this.props.background, 'container');
    return (
      <div className={classesWall}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-2' />
            <div className='col-md-8'>
              <VideoPlayer />
              <div className='center'>
              <h3>Chutte.com</h3>
              <h3>A reverse auction style marketplace.</h3>
              <img style={{height: '50px', width: '50px'}}src='./../assets/wallAssets/kgbjs.png'/><h4>KGBJS</h4>
                <a href='https://github.com/mickberber'><h5>Myself  <img src='./src/assets/GitHub-Mark-32px.png'></img></h5></a>
                <a href='https://github.com/seanagibson'><h5>Sean Gibson  <img src='./src/assets/GitHub-Mark-32px.png'></img></h5></a>
                <a href='https://github.com/peterkaiserui'><h5>Peter Kaiser  <img src='./src/assets/GitHub-Mark-32px.png'></img></h5></a>
                <a href='https://github.com/beresford211'><h5>Tim Steele  <img src='./src/assets/GitHub-Mark-32px.png'></img></h5></a>
              </div>
            </div>
            <div className='col-md-2' />
          </div>
        </div>
      </div>
    )
  }
}

export default ChutteWall;
