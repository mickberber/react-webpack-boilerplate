import React from 'react';
import { Component } from 'react';
import CN from 'classnames';

class Wall extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    const classes = CN(this.props.wall, this.props.class);
    return (
      <div className={classes}>
      </div>
    );
  }
}

export default Wall;
