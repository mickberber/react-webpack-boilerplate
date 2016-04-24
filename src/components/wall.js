import React from 'react';
import { Component } from 'react';
import CN from 'classnames';

class Wall extends Component {
  render() {
    const classes = CN('wallImage', 'wallBackground');
    return (
      <div className={classes}>
      </div>
    );
  }
}

export default Wall;
