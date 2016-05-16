import React, { Component } from 'react';
import CN from 'classnames';

class GilsonWall extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    const classesWall = CN(this.props.wall, this.props.class);;
    return (
      <div className={classesWall}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-2' />
            <div className='col-md-8 center gilsonText'><i className="fa fa-area-chart fa-5x"></i>Team Rubicon Mobilizer</div>
            <div className='col-md-2' />
          </div>
        </div>
      </div>
    )
  }
}

export default GilsonWall;
