import React, { Component } from 'react';
import CN from 'classnames';

class GilsonWall extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    const classes = CN(this.props.wall, this.props.class);;
    return (
      <div className={classes}>
        <div className='gilsonStageIMG'></div>
      </div>
    )
  }
}

export default GilsonWall;
