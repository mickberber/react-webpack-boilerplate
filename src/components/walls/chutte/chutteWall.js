import React, { Component } from 'react';
import VideoPlayer from './../../VideoPlayer';
import CN from 'classnames';

class ChutteWall extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    const classes = CN(this.props.wall, this.props.class);;
    return (
      <div className={classes}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-2' />
            <div className='col-md-8'>
              <VideoPlayer />
            </div>
            <div className='col-md-2' />
          </div>
        </div>
      </div>
    )
  }
}

export default ChutteWall;
