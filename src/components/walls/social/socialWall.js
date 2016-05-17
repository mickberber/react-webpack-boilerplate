import React, { Component } from 'react';
import CN from 'classnames';

class SocialWall extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    const classes = CN(this.props.wall, this.props.background, 'container');;
    return (
      <div className={classes} />
    )
  }
}

export default SocialWall;
