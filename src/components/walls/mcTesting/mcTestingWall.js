import React, { Component } from 'react';
import CN from 'classnames';

class McTestingWall extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    const classes = CN(this.props.wall, this.props.class);;
    return (
      <div className={classes} />
    )
  }
}

export default McTestingWall;
