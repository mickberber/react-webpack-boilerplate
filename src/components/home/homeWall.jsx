import React, { Component } from 'react';
import { Link } from 'react-router';
import CN from 'classnames';

class HomeWall extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    const classesWall = CN(this.props.wall, this.props.background, 'center');
    return (
      <div className={classesWall}>
          <div className='row row-eq-height'>
            <div className='col-xs-3 col-md-2' />
              <div className='col-xs-12 col-md-8 center' style={{height: '620px'}}>
              </div>
            <div className='col-xs-3 col-md-2' />
          </div>
      </div>
    );
  }
}

export default HomeWall;
